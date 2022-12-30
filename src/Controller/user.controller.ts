import messagesConfig from "../Config/messages.config";
import prisma_client from "../Databases/prisma/Prisma.client";
import { IMiddlewaresParams } from "../Router/types";
import { User } from "../Model/user.model";
import { HTTPsuccess } from "../Services/http/HTTPsucecss.tool";
import { Security } from "../Services/Authentication/Security/security";
// Don't need put try/catch, just nextWrapper

class UserController extends Security {
  async list({ req, res, nxt }: IMiddlewaresParams) {
    const user = await User.findMany();
    HTTPsuccess.call_200(nxt, user,messagesConfig.LOGIN_SUCCESS);
  }
}
const userController = new UserController();
export { userController };
