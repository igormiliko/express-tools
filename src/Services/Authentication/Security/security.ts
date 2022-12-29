import { Request } from "express";
import messagesConfig from "../../../Config/messages.config";
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

  public static authenticate: ISecurity_action<void> = async (
    req,
    res,
    nxt
  ) => {
    let userJWT = null;

    if (req.headers.authorization) {
      userJWT = await this.decryptIV(JSON.parse(req.headers.authorization));
    }
    if (!userJWT) {
      return nxt({
        status: 401,
        message: messagesConfig.UNAUTHENTICATE,
      });
    }
    res.locals.userJWT = userJWT;
  };
}
