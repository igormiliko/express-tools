import { Request, Response, NextFunction } from "express";

export type Texpress_params_route = [[Request, Response, NextFunction]];

export interface IRouteConfig {
  Route_name: string;
  MethodName: TMETHODs_http;
  Controller: (...args: Texpress_params_route) => NextFunction | null
}