import { Error_tool } from "../Error/Error.tool";
import { Response, Request, NextFunction } from "express";

export type IHTTP_methods_config = (CR: IRouteConfig) => {
  get: Router;
  put: Router;
  post: Router;
  delete: Router;
};
export type TMiddlewareFunction = ({
  req,
  res,
  nxt,
}: IMiddlewaresParams) => NextFunction | null;

export interface IRouteConfig {
  Route_name: string;
  MethodName: TMETHODs_http;
  Middlewares: TMiddlewareFunction[];
  Controller: {
    run: ({ req, res, nxt }: IMiddlewaresParams) => Promise<void>;
    errorHandler: Error_tool;
  };
}

export interface IMiddlewaresParams {
  req: Request;
  res: Response;
  nxt: NextFunction;
}
