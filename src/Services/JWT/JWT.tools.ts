import * as jsonwebtoken from "jsonwebtoken";
import { Response } from "express";
import Cyphers from "../Authentication/Security/cypher";
class JWTtool extends Cyphers {
  constructor() {
    super()
  }

  private JWT_CONFIG = {
    iat: Math.floor(Date.now()),
    exp: Date.now() + 1000 * 60 * 60 * 24 * 2,
  };
  
  private key = async () => await Cyphers.encryptSHA256(process.env.JWT_SECRET!);
  
  async sign(dataToEncrypt: string, res: Response) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const data = await Cyphers.encryptIV(dataToEncrypt)
    
        let token = jsonwebtoken.sign(
          {
            data,
            ...this.JWT_CONFIG
          },
          await this.key()
        );
        res.append("authorization", token);
        return resolve()
      } catch (error) {
        return reject(error)
      }
    })
  }

  async verify(token: string, res: Response) {
    return new Promise<string | jsonwebtoken.JwtPayload>(async (resolve, reject) => {
      try {
        const isTrustedJWT = jsonwebtoken.verify(token, await this.key())
        res.locals.userJWT = token
        resolve(isTrustedJWT)
      } catch (error) {
        reject(error)
      }
    })
  }
}

const JWT = new JWTtool();

export { JWT };
