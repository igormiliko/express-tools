import { NextFunction } from "express";

export class HTTPsuccess {
    static call_200(n: NextFunction, data: any, message: string) {
        return Promise.resolve(n({
            status: 200,
            data,
            message: message,
          }));
    }

    static call_201(n: NextFunction, message: string) {
        return Promise.resolve(n({
            status: 201,
            data: {},
            message: message,
          }));
    }
}