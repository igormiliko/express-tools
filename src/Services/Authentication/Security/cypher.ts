import Crypto, { BinaryToTextEncoding } from "crypto";
import { TEncryptIVObject, TJwt } from "./types";

export default class Cyphers {
  private static hashBy(
    algo: string,
    data: string,
    digest: BinaryToTextEncoding,
    options?: Crypto.HashOptions
  ) {
    return new Promise<string>((res, rej) => {
      try {
        return res(
          Crypto.createHash(algo, options).update(data).digest(digest)
        );
      } catch (error) {
        return rej(error);
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
    return new Promise(async (res, rej) => {
      try {
        const key = await Cyphers.key;
        const iv = Cyphers.iv;

        let cipher = Crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
        let encrypted = cipher.update(data);

        encrypted = Buffer.concat([encrypted, cipher.final()]);

        return res({
          iv: iv.toString("hex"),
          encrypted: encrypted.toString("hex"),
        });
      } catch (error) {
        rej(error);
      }
    });
  }

  protected static decryptIV(data: TJwt) {
    return new Promise<string>(async (res, rej) => {
      try {        
        let encryptedText = Buffer.from(data.encrypted, "hex");
        
        let decipher = Crypto.createDecipheriv(
          "aes-256-cbc",
            Buffer.from(await Cyphers.key),
            Buffer.from(data.iv, "hex")
        );

        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

          res({
            ...JSON.parse(decrypted.toString()),
            iat: data.iat,
            exp: data.exp
          })

      } catch (error) {
        rej(error);
      }
    });
  }
}