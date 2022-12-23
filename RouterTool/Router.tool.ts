
import { NextFunction, Router, Request, Response, Express } from "express";
import RouteConfig from "./RouteConfig";
import { IRouteConfig} from "../types";
import { IHTTP_methods_config } from "./types";

const ROUTER_Tol = Router();
{
  /*@@/           I           /@@*/
  /*@@/         СОЛНЦЕ        /@@*/
}
const ROUTER_TolPartner__2 =
  (controller?: any) =>
  async (rq: Request, rs: Response, nxt: NextFunction) => {
    try {
      await Promise.resolve(controller(rq, rs, nxt));
    } catch (e) {
      console.log(e);
      return nxt();
    }
  };

const HTTp_methods: IHTTP_methods_config = (CR: IRouteConfig) => ({
  get: ROUTER_Tol.get(CR.Route_name, ROUTER_TolPartner__2(CR.Controller)),
  put: ROUTER_Tol.put(CR.Route_name, ROUTER_TolPartner__2(CR.Controller)),
  post: ROUTER_Tol.post(CR.Route_name, ROUTER_TolPartner__2(CR.Controller)),
  delete: ROUTER_Tol.delete(CR.Route_name, ROUTER_TolPartner__2(CR.Controller)),
});

// Configuring Routes
export default (app: Express) =>
  RouteConfig.forEach((CR) =>
    app.use(HTTp_methods(CR)[CR.MethodName as keyof IHTTP_methods_config]))