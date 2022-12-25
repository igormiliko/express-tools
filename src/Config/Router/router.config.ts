import { Response, Request, NextFunction } from "express";
import { IRouteConfig } from "../../Router/types";
import auth from "./auth.router";
import permission from "./permission.router";
import role from "./role.router";
import user from "./user.router";

export const defaultController =
  async (_req: Request, _res: Response, nxt: NextFunction) =>
    _res.send("Building ⚠️");

export default [
  {
    Route_name: "/status",
    MethodName: "get",
    Middlewares: [],
    Controller: { run: defaultController, errorHandler: null },
  },
  ...user,
  ...role,
  ...permission,
  ...auth,
/**@router@**/
] as unknown as IRouteConfig[];
