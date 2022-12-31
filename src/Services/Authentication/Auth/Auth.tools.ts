import { NextFunction, Request, Response } from "express";
import { IMiddlewaresParams } from "../../../Router/types";
import { Role } from "../Roles/role";
import { Security } from "../Security/security";

class Auth {
  static Role: Role;
  async aplly({ req, res, nxt }: IMiddlewaresParams) {
    try {
      await Security.authenticate(req, res, nxt);
      nxt()
    } catch (error) {
      return error
    }
  }
}

const auth = (req: Request, res: Response, nxt: NextFunction) =>
  new Auth().aplly({ req, res, nxt });
export default auth;
