import Crypto, { BinaryToTextEncoding } from "crypto";
import { TJWT_application } from "../../JWT/JWT.tools";
import { TEncryptIVObject } from "./types";

export default class Cyphers {
  private static hashBy(
    algo: string,
    data: string,
    digest: BinaryToTextEncoding,
    options?: Crypto.HashOptions
  ) {
    return new Promise<string>((res, reject) => {
      try {
        return res(
          Crypto.createHash(algo, options).update(data).digest(digest)
        );
      } catch (error) {
        return reject(error);
      }
    });
  }

  static encryptSHA256(data: string): Promise<string> {
    return this.hashBy("sha256", data, "hex");
  }

  private static generateSHAKE256_KEYS = async (outputLength: number) =>
    Buffer.from(
      await Cyphers.hashBy("shake256", "BALALIKA", "hex", {
        outputLength: outputLength,
      }),
      "hex"
    );

  private static readonly key = Promise.resolve(
    Cyphers.generateSHAKE256_KEYS(32)
  );

  private static readonly iv = Crypto.randomBytes(16);

  static encryptIV(data: string): Promise<TEncryptIVObject> {
    return new Promise(async (resolve, reject) => {
      try {
        const key = await Cyphers.key;
        const iv = Cyphers.iv;

        let cipher = Crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
        let encrypted = cipher.update(data);

        encrypted = Buffer.concat([encrypted, cipher.final()]);

        return resolve({
          iv: iv.toString("hex"),
          encrypted: encrypted.toString("hex"),
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  protected static decryptIV(data: TJWT_application["data"]) {
    return new Promise<string>(async (reoslve, reject) => {
      try {
        let encryptedText = Buffer.from(data.encrypted, "hex");
        
        let decipher = Crypto.createDecipheriv(
          "aes-256-cbc",
            Buffer.from(await Cyphers.key),
            Buffer.from(data.iv, "hex")
        );

        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

        reoslve(decrypted.toString())
      } catch (error) {
        reject(error);
      }
    });
  }

  protected static decryptJWT_IV(token: TJWT_application) {
    return new Promise<string>(async (reoslve, reject) => {
      try {        
        const JWT = await Cyphers.decryptIV(token.data)

        reoslve({
          ...JSON.parse(JWT)
        })
      } catch (error) {
        reject(error);
      }
    });
  }
}