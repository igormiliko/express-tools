/** EVER LEAVE AN EXAMPLE OF DDD IN THE FINAL PAGE */

import { Response, Request, NextFunction } from "express";
import { IRouteConfig } from "./types";
const defaultController =
  (msg: string) => (_req: Request, _res: Response, nxt: NextFunction) =>
    _res.send(msg);

export default [
  /**STATUS ==> GET IN*/ {
    Route_name: "/status",
    MethodName: "get",
    Middlewares: [],
    Controller: { run: defaultController("ON🔛👹"), errorHandler: null },
  },
  /** USER */
  /** Get a list        */ {
    Route_name: "/user",
    MethodName: "get",
    Middlewares: [],
    Controller: { run: defaultController("Hello world!"), errorHandler: null },
  },
  /** Post a new        */ {
    Route_name: "/user",
    MethodName: "post",
    Middlewares: [],
    Controller: { run: defaultController("Hello world!"), errorHandler: null },
  },
  /** Get details by id */ {
    Route_name: "/user:uuid",
    MethodName: "get",
    Middlewares: [],
    Controller: { run: defaultController("Hello world!"), errorHandler: null },
  },
  /** Edit by id        */ {
    Route_name: "/user:uuid",
    MethodName: "put",
    Middlewares: [],
    Controller: { run: defaultController("Hello world!"), errorHandler: null },
  },
  /** Delete by id      */ {
    Route_name: "/user:uuid",
    MethodName: "delete",
    Middlewares: [],
    Controller: { run: defaultController("Hello world!"), errorHandler: null },
  },
] as unknown as IRouteConfig[];
