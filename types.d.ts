import { Request, Response, NextFunction } from "express";

export type Texpress_params_route = [[Request, Response, NextFunction]];

export type TResponse_From = {
    metadata: {
        parameters: Request["params"];
        path: Request["path"];
        ip: Request["ip"];
    }
    status: number;
    message: string;
    data: any;
}