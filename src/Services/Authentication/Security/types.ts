import { Response, Request, NextFunction } from "express";

export type TEncryptIVObject = {
  iv: string;
  encrypted: string;
};

export type TJwt = {
  iv: string;
  encrypted: string;
  iat: number;
  exp: number;
};

export type ISecurity_action<T> = (
  req: Request,
  res: Response,
  nxt: NextFunction
) => Promise<T>;
