import { NextFunction, Request, Response } from "express";
import { Role } from "../Roles/role";

class Auth {
  static Role: Role;
  async aplly(req: Request, res: Response, nxt: NextFunction) {
    const RoleDomain = res.locals.user

    Auth.Role = new Role(RoleDomain,nxt);
    res.locals = Auth.Role;
    nxt()
  } 
}

const auth = (_0: Request, _1: Response, _3: NextFunction) =>
  new Auth().aplly(_0, _1, _3);
export default auth;
