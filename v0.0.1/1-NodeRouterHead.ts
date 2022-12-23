import express, { Request, Response, NextFunction } from "express";
import { nextTick } from "process";

const APP = express();

{
  /*@@/           I           /@@*/
}
type Texpress_params_route = [Request, Response, NextFunction];
APP.get("", (EPR: Texpress_params_route) => {
  try {
    const [Rq, Rs, Nxt] = EPR;
  } catch {
    (e: any) => 0;
  }
});
// type Texpress_params_route = [Request, Response, NextFunction]
APP.get("", (EPR: Texpress_params_route) => {
  try {
    const [R, RS, NXT] = EPR;
  } catch {
    (e: any) => 0;
  }
});
// type Texpress_params_route = [Request, Response, NextFunction]
APP.post("", (EPR: Texpress_params_route) => {
  try {
    const [R, RS, NXT] = EPR;
  } catch {
    (e: any) => 0;
  }
});
// type Texpress_params_route = [Request, Response, NextFunction]
APP.put("", (EPR: Texpress_params_route) => {
  try {
    const [R, RS, NXT] = EPR;
  } catch {
    (e: any) => 0;
  }
});
// type Texpress_params_route = [Request, Response, NextFunction]
APP.delete("", (EPR: Texpress_params_route) => {
  try {
    const [R, RS, NXT] = EPR;
  } catch {
    (e: any) => 0;
  }
});
