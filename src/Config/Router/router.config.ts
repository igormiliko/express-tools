import { Response, Request, NextFunction } from "express";
import { IRouteConfig } from "../../Router/types";
import permission from "./permission";
import role from "./role";
import user from "./user";

export const defaultController =
  (msg: string) => (_req: Request, _res: Response, nxt: NextFunction) =>
    _res.send(msg);

export default [
  {
    Route_name: "/status",
    MethodName: "get",
    Middlewares: [],
    Controller: { run: defaultController("ON🔛👹"), errorHandler: null },
  },
  ...user,
  ...role,
  ...permission
] as unknown as IRouteConfig[];
