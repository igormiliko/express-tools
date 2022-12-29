import messagesConfig from "../Config/messages.config";
import prisma_client from "../Databases/prisma/Prisma.client";
import { IMiddlewaresParams } from "../Router/types";
import Cyphers from "../Services/Authentication/Security/cypher";
import { Request } from "express";
import { HTTPErrors } from "../Services/http/HTTPerrors.tools";
import { User } from "../Model/user.model";
import { HTTPsuccess } from "../Services/http/HTTPsucecss.tool";
import { JWT } from "../Services/JWT/JWT.tools";
// Don't need put try/catch, just nextWrapper

class AuthController {
  protected static getpassword = async (req: Request) =>{
    return new Promise<string>(async (res,rej) => {
      try {
        return res(await Cyphers.encryptSHA256(req.headers.authorization!));
      } catch (error) {
        return rej(error)
      }
    })
  }

  async authenticate({ req, res, nxt }: IMiddlewaresParams) {
    const user = await User.findFirst(
      req,
      await AuthController.getpassword(req)
    );

    await JWT.sign(JSON.stringify(user), res)

    HTTPErrors.call_404(nxt, user, messagesConfig.LOGIN_FAIL);
    HTTPsuccess.call_201(nxt , messagesConfig.LOGIN_SUCCESS)
  }

  async register({ req, res, nxt }: IMiddlewaresParams) {
    let data: any = {
      ...req.body,
      password: await AuthController.getpassword(req),
    };

    await prisma_client.user.create({
      data: data,
    });

    return nxt({
      status: 201,
      message: messagesConfig.AUTH_REGISTER_SUCCESS,
      data: {},
    });
  }
}
const controller = new AuthController();
export { controller };
export default () => "Controllers don't have default export";
