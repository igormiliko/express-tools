import { NextFunction, Request, Response } from "express";
import { resolve } from "path";
import { TResponse_from } from "../../types";
import { IRouteConfig } from "../Router/types";

export const nextWrapper = (objc: TResponse_from, nxt: NextFunction) => nxt(objc);

export const controllerWrapper =
  (c: IRouteConfig["Controller"]) =>
  async (req: Request, res: Response, nxt: NextFunction) => {
    try {
      await new Promise(async (resol, rej) => {
        await c.run({req, res, nxt});
        resolve()
      })
    } catch (e) {
      if(c.errorHandler) {
        await Promise.resolve(c.errorHandler.catch({req, res, nxt}));
      }
      return nextWrapper({
        data: {},
        message: "Error at server",
        status: 500
      }, nxt);
    }
  };
