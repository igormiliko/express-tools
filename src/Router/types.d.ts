import { Error_tool } from "../Error/Error.tool";
import { Response, Request, NextFunction } from "express";

export type IHTTP_methods_config = (CR: IRouteConfig) => {
  get: Router;
  put: Router;
  post: Router;
  delete: Router;
};
export type TMiddlewareFunction = (rq: Request, rs: Response, nx: NextFunction) => NextFunction | null

export interface IRouteConfig {
  Route_name: string;
  MethodName: TMETHODs_http;
  Middlewares: TMiddlewareFunction[];
  Controller: {
    run: (rq: Request, rs: Response, nx: NextFunction) =>Promise<void>
    errorHandler: Error_tool;
}
}
