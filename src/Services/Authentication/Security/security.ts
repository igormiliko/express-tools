import { Request } from "express";
import { HTTPErrors } from "../../http/HTTPerrors.tools";
import { JWT, TJWT_application } from "../../JWT/JWT.tools";
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

  public static authenticate: ISecurity_action<void> = (req, res, nxt) => {
    return new Promise(async (resolve, reject) => {
      try {
        const token = req.headers.authorization

        if (!token) {
          HTTPErrors.call_401(nxt);
        }
        const decodeToken = await JWT.decode(token!, nxt)

        if(JWT.isExpired(decodeToken)) {
          HTTPErrors.call_401(nxt);
        }

       const userRequested = await Cyphers.decryptJWT_IV(decodeToken)
       res.locals.userSession = userRequested 
        
        resolve()
      } catch (error) {
        reject(error)
      }
    });
  };
}
