import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";
import messagesConfig from "../../Config/messages.config";

class AuthValidator {
  async register(req: Request, res: Response, nxt: NextFunction) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().max(128).required(),
        email: Yup.string().email().required(),
        password: Yup.string()
          .min(8)
          .max(16)
          // .matches(/^(?=.*\d)$/, "The password must be contain one digit.")
          // .matches(
          //   /^(?=.*[a-z])$/,
          //   "The password must be contain one lowercase character."
          // )
          // .matches(
          //   /^(?=.*[A-Z])$/,
          //   "The password must be contain one uppercase character."
          // )
          // .matches(
          //   /^(?=.*[$*&@#])$/,
          //   "The password must be contain one special character."
          // )
          .required(),
      });

      await schema.validate(req.body, {
        abortEarly: false,
      });

      nxt();
    } catch (error: any) {
      // console.log(error);
      if (error instanceof Yup.ValidationError) {
        nxt({
          data: {},
          message: error.errors.join(", "),
          status: 400,
        });
      }
      
      nxt({
        data: {},
        message: messagesConfig.ERROR_AT_SERVER,
        status: 500,
      });
    }
  }
}
export default new AuthValidator();
