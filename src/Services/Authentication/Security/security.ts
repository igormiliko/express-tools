import { NextFunction, Request, Response } from "express";
import messagesConfig from "../../../Config/messages.config";
import Cyphers from "./cypher";

export type ISecurity_action<T> = (
  req: Request,
  res: Response,
  nxt: NextFunction
) => Promise<T>;

export class Security extends Cyphers {
  constructor() {
    super()
  }

  public static authorized: ISecurity_action<any> = (_, res) => Promise.resolve((role: string) => {
    const authorization = res.locals.user.role === role
    return authorization
  });
  
  public static authenticate: ISecurity_action<string> = async (req, _ , nxt) => {
    // const roleName = await this.decryptIV({iv:"", encrypted: ""})
    // if(!roleName) {
    //     nxt({
    //         status: 401,
    //         message: messagesConfig.UNAUTHENTICATE
    //     })
    // }
    return 'sasds'
  };
}
