import { NextFunction, Request, Response } from "express";
import { Role } from "../Roles/role";
import { Security } from "../Security/security";

class Auth {
  static Role: Role;
  async aplly(req: Request, res: Response, nxt: NextFunction) {
    const RoleDomain = await Promise.resolve(
      Security.authenticate(req, res, nxt)
    );

    Auth.Role = new Role(RoleDomain,nxt);
    res.locals = Auth.Role;
  }
}

const auth = (_0: Request, _1: Response, _3: NextFunction) =>
  new Auth().aplly(_0, _1, _3);
export default auth;
