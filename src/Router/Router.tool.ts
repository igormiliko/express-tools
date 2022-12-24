
import { Router, Express } from "express";
import { controllerWrapper } from "../Controller/ControllerWraper.tools";
import RoutersConfig from "../Config/Router/router.config";
import { IHTTP_methods_config, IRouteConfig } from "./types";

const ROUTER = Router();
{
  /*@@/           I           /@@*/
  /*@@/         СОЛНЦЕ        /@@*/
}

const HTTp_methods: IHTTP_methods_config = (CR: IRouteConfig) => ({
  get: ROUTER.get(CR.Route_name, CR.Middlewares, controllerWrapper(CR.Controller)),
  put: ROUTER.put(CR.Route_name, CR.Middlewares, controllerWrapper(CR.Controller)),
  post: ROUTER.post(CR.Route_name, CR.Middlewares, controllerWrapper(CR.Controller)),
  delete: ROUTER.delete(CR.Route_name, CR.Middlewares, controllerWrapper(CR.Controller)),
});

// Configuring Routes
export default (app: Express) =>
RoutersConfig.forEach((CR) =>
    app.use(HTTp_methods(CR)[CR.MethodName as keyof IHTTP_methods_config]))