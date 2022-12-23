
import {Request, Response, NextFunction, Router} from "express";

const ROUTER_Tol = Router();

{
  /*@@/           I           /@@*/
  /*@@/         СОЛНЦЕ        /@@*/
}

type Texpress_params_route = [Request, Response, NextFunction];

const ROUTER_TolPartner__2 = (EPR: Texpress_params_route, controller?: any) => {
const [R, RS, NXT] = EPR;
  try {controller(EPR);NXT()} catch (e) {return NXT()};
}

ROUTER_Tol.get("/get", async (EPR: Texpress_params_route) => {
ROUTER_TolPartner__2(EPR)
});

ROUTER_Tol.get("/get", (EPR: Texpress_params_route) => {
ROUTER_TolPartner__2(EPR)
});

ROUTER_Tol.post("/post", (EPR: Texpress_params_route) => {
ROUTER_TolPartner__2(EPR)
});

ROUTER_Tol.delete("put", (EPR: Texpress_params_route) => {
ROUTER_TolPartner__2(EPR)
});

ROUTER_Tol.put("/delete", (EPR: Texpress_params_route) => {
ROUTER_TolPartner__2(EPR)
});
