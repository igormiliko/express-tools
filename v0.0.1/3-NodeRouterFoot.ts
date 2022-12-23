import { Request, Response, NextFunction, Router } from "express";

const ROUTER_Tol = Router();
{
  /*@@/           I           /@@*/
  /*@@/         СОЛНЦЕ        /@@*/
}
type Texpress_params_route = [Request, Response, NextFunction];

const ROUTER_TolPartner__2 = (EPR: Texpress_params_route, controller?: any) => {
  const [R, RS, NXT] = EPR;
  try {
    controller(EPR);
    NXT();
  } catch (e) {
    return NXT();
  }
};

export type TMETHODs_http = "get" | "post" | "put" | "delete";

interface IRouteConfig {
  Rote_name: string;
  MethodName: TMETHODs_http;
  Controller: null;
}
// Configuring Routes
export default (() => [
  /** USER */                                                       /**STATUS_HEALTH */
  { Route_name: "/user", MethodName: "get", Controller: null },/* */{ Route_name: "/user", MethodName: "get", Controller: null },
  { Route_name: "/user", MethodName: "post", Controller: null },/* */ { Route_name: "/user", MethodName: "post", Controller: null },
  { Route_name: "/user:uuid", MethodName: "get", Controller: null },/* */{ Route_name: "/user:uuid", MethodName: "get", Controller: null },
  { Route_name: "/user:uuid", MethodName: "put", Controller: null },/* */{ Route_name: "/user:uuid", MethodName: "put", Controller: null },
  { Route_name: "/user:uuid", MethodName: "delete", Controller: null },/* */{ Route_name: "/user:uuid", MethodName: "delete", Controller: null },
])().map((CR) =>
  (ROUTER_Tol as any)[CR.MethodName](
    CR.Route_name,
    (EPR: Texpress_params_route) => {
      ROUTER_TolPartner__2(EPR, CR.Controller);
    }
  )
);
