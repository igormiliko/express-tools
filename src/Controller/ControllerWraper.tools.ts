import { NextFunction, Request, Response } from "express";

export const controllerWrapper = (controller?: any) =>
async (rq: Request, rs: Response, nxt: NextFunction) => {
    try {
        await Promise.resolve(controller(rq, rs, nxt));
    } catch (e) {
        console.log(e);
        return nxt();
    }
};