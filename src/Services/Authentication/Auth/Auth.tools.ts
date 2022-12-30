import { NextFunction, Request, Response } from "express";
import { IMiddlewaresParams } from "../../../Router/types";
import { Role } from "../Roles/role";

class Auth {
  static Role: Role;
  async aplly({req, res, nxt}: IMiddlewaresParams) {
    const RoleDomain = res.locals.user

    Auth.Role = new Role(RoleDomain,nxt);
    res.locals = Auth.Role;
    nxt()
  } 
}

const auth = (req: Request, res: Response, nxt: NextFunction) =>
  new Auth().aplly({req, res, nxt});
export default auth;
