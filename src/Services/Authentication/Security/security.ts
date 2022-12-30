import { Request } from "express";
import { HTTPErrors } from "../../http/HTTPerrors.tools";
import Cyphers from "./cypher";
import { ISecurity_action } from "./types";

export class Security extends Cyphers {
  constructor() {
    super();
  }
  protected static getpassword = async (req: Request) => {
    return new Promise<string>(async (res, rej) => {
      try {
        return res(await Cyphers.encryptSHA256(req.headers.authorization!));
      } catch (error) {
        return rej(error);
      }
    });
  };

  public static authorized: ISecurity_action<any> = (_, res) =>
    Promise.resolve((role: string) => {
      const authorization = res.locals.user.role === role;
      return authorization;
    });

  public static verifyToken: ISecurity_action<string | null> = async (req, res, nxt) => {
    return new Promise(async (resolve, reject) => {
      try {
        let userJWT = null;

        if (req.headers.authorization) {
          userJWT = await this.decryptJWT_IV(JSON.parse(req.headers.authorization));
        }
        if (!userJWT) {
          HTTPErrors.call_401(nxt);
        }
        resolve(userJWT);
      } catch (error) {
        reject(error);
      }
    });
  };

  public static authenticate: ISecurity_action<void> = (req, res, nxt) => {
    return new Promise(async (resolve, reject) => {
      try {
        const JWT = await Security.verifyToken(req, res, nxt)
        
        console.log()
        resolve()
      } catch (error) {
        reject(error)
      }
    });
  };
}
