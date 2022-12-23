import { NextFunction, Request, Response } from "express";
import { TResponse_From } from "../../types";

export default async (
  resFrom: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const sender: TResponse_From = {
        metadata: {
            parameters: req.params,
            path: req.path,
            ip: req.ip,
        },
        status: resFrom.status,
        message: resFrom.message,
        data: resFrom.data
    }

    return res.status(sender.status).json(sender);
};
