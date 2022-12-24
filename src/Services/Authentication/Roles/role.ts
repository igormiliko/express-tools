import { permissions, stuffies, TSP } from "../../../Config/auth.config";
import { NextFunction, Request, Response } from "express";
import express from "express";
import { Security } from "../Security/security";

export class Role extends Security {
  static domain: string;
  stuff: stuffies = [];
  permissions: permissions = [];
  SP: TSP = [];
  static next: NextFunction;
  static req: Request = express.request;
  static res: Response = express.response;

  constructor(domain: string, nxt: NextFunction) {
    super();
    Role.domain = domain;
  }
}