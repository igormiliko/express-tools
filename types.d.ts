import { Request, Response, NextFunction } from "express";

export type Texpress_params_route = [[Request, Response, NextFunction]];

export interface TMetadata {
    metadata: {
        parameters: Request["params"];
        path: Request["path"];
        ip: Request["ip"];
    }
} 

export interface TResponse_from {
    status?: number;
    message?: string;
    data?: any;
}