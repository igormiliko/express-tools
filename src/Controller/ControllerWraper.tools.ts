import { NextFunction, Request, Response } from "express";
import { IRouteConfig } from "../Router/types";

{
    /*@@/           I           /@@*/
    /*@@/        Меркурий       /@@*/
}

export const controllerWrapper =
  (c: IRouteConfig["Controller"]) =>
  async (rq: Request, rs: Response, nxt: NextFunction) => {
    try {
      await Promise.resolve(c.run(rq, rs, nxt));
    } catch (e) {
      await Promise.resolve(c.errorHandler.catch(rq, rs, nxt));
      return nxt();
    }
  };
