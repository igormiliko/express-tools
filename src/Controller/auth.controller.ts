import messagesConfig from "../Config/messages.config";
import prisma_client from "../Databases/prisma/Prisma.client";
import { IMiddlewaresParams } from "../Router/types";
import { HTTPErrors } from "../Services/http/HTTPerrors.tools";
import { User } from "../Model/user.model";
import { HTTPsuccess } from "../Services/http/HTTPsucecss.tool";
import { JWT } from "../Services/JWT/JWT.tools";
import { Security } from "../Services/Authentication/Security/security";
// Don't need put try/catch, just nextWrapper

class AuthController extends Security {
  async login({ req, res, nxt }: IMiddlewaresParams) {
    const user = await User.loginVerify(
      req,
      await Security.getpassword(req)
    );

    HTTPErrors.call_404(nxt, user, messagesConfig.LOGIN_FAIL);

    await JWT.sign(JSON.stringify(user), res);

    HTTPsuccess.call_201(nxt, messagesConfig.LOGIN_SUCCESS);
  }

  async register({ req, res, nxt }: IMiddlewaresParams) {
    await prisma_client.user.create({
      data: {
        ...req.body,
        password: await Security.getpassword(req),
      },
    });
    HTTPsuccess.call_201(nxt, messagesConfig.AUTH_REGISTER_SUCCESS)
  }
}
const authController = new AuthController();
export { authController };