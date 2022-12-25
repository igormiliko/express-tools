import { NextFunction, Request, Response } from "express";
import { TResponse_from } from "../../types";
import { IRouteConfig } from "../Router/types";

export const nextWrapper = (objc: TResponse_from, nxt: NextFunction) => nxt(objc);

export const controllerWrapper =
  (c: IRouteConfig["Controller"]) =>
  async (rq: Request, rs: Response, nxt: NextFunction) => {
    try {
      await new Promise(async (res, rej) => {
        await c.run(rq, rs, nxt);
      })
    } catch (e) {
      console.log(e)
      if(c.errorHandler) {
        await Promise.resolve(c.errorHandler.catch(rq, rs, nxt));
      }
      return nextWrapper({
        data: {},
        message: "Error at server",
        status: 500
      }, nxt);
    }
  };
