import { NextFunction, Request, Response } from "express";
import { TResponse_from, TMetadata } from "../../types";

export default async (
  resFrom: TResponse_from,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const sender: TMetadata & TResponse_from = {
        metadata: {
            parameters: req.params,
            path: req.path,
            ip: req.ip,
        },
        status: resFrom.status,
        message: resFrom.message,
        data: resFrom.data
    }

    return res.status(sender.status || 666).json(sender);
};
