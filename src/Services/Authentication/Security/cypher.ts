import Crypto from "crypto";

export default class Cyphers {
  static encryptSHA256(data: any): Promise<string> {
    return new Promise((r) =>
      r(
        (() => {
          const _hash = Crypto.createHash("sha256");
          _hash.update(data);
          return Promise.resolve(_hash.digest("hex"));
        })()
      )
    );
  }

  static encrypt(data: any): Promise<string> {
    return new Promise((r) =>
      r(
        (() => {
          const _hash = Crypto.createHash("sha256");
          _hash.update(data);
          return Promise.resolve(_hash.digest("hex"));
        })()
      )
    );
  }

  protected static decrypt(data: any) {
    return data;
  }
}
