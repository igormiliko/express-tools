import { NextFunction, Request, Response } from "express";
import { IRouteConfig } from "../Router/types";

export const controllerWrapper =
  (c: IRouteConfig["Controller"]) =>
  async (req: Request, res: Response, nxt: NextFunction) => {
    try {
      Promise.resolve(c.run({ req, res, nxt }));
    } catch (e) {
      if (c.errorHandler) {
        await Promise.resolve(c.errorHandler.catch({ req, res, nxt }));
      }
      return nxt({
        data: {},
        message: "Error at server",
        status: 500,
      });
    }
  };
