import { NextFunction, Request, Response } from "express";
import messagesConfig from "../Config/messages.config";
import prisma_client from "../Databases/prisma/Prisma.client";
import { IMiddlewaresParams, TMiddlewareFunction } from "../Router/types";
import Cyphers from "../Services/Authentication/Security/cypher";
import { nextWrapper } from "./ControllerWraper.tools";
// Don't need put try/catch, just nextWrapper
class AuthController {

  async authenticate({ req, res, nxt }: IMiddlewaresParams) {}
  async register({ req, res, nxt }: IMiddlewaresParams) {
    let data: any = {
      ...req.body,
      password: await Cyphers.encrypt(req.body.password),
    };

    await prisma_client.user.create({
      data: data,
    });

    return nextWrapper(
      {
        status: 201,
        message: messagesConfig.AUTH_REGISTER_SUCCESS,
        data: {},
      },
      nxt
    );
  }
}

const controller = new AuthController();
export { controller };

export default () => "Controllers don't have default export";
