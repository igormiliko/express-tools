import * as jsonwebtoken from "jsonwebtoken";
import { NextFunction, Response } from "express";
import Cyphers from "../Authentication/Security/cypher";
import { HTTPErrors } from "../http/HTTPerrors.tools";

export type TJWT_application = {
  data: {
    iv: string;
    encrypted: string;
  };
  iat: number;
  exp: number;
};

class JWTtool extends Cyphers {
  constructor() {
    super();
  }

  private JWT_CONFIG = {
    iat: Math.floor(Date.now()),
    exp: Date.now() + 1000 * 60 * 60 * 24 * 2,
  };

  private key = async () =>
    await Cyphers.encryptSHA256(process.env.JWT_SECRET!);

  async sign(dataToEncrypt: string, res: Response) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const data = await Cyphers.encryptIV(dataToEncrypt);

        let token = jsonwebtoken.sign(
          {
            data,
            ...this.JWT_CONFIG,
          },
          await this.key()
        );
        res.append("authorization", token);
        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }
  async decode(token: string, nxt: NextFunction) {
    return new Promise<TJWT_application>(async (resolve, reject) => {
      try {
        const decode = jsonwebtoken.verify(token, await this.key());
        resolve(decode as TJWT_application);
      } catch (error) {
        if(error instanceof jsonwebtoken.JsonWebTokenError) {
         reject(HTTPErrors.call_500(nxt))
        }
        reject(error)
      }
    });
  }
  isExpired(token: TJWT_application) {
    return Number(token.exp) <= Number(Date.now());
  }
}

const JWT = new JWTtool();

export { JWT };
