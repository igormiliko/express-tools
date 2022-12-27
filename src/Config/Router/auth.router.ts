import {controller} from "../../Controller/auth.controller";
import authValidator from "../../Middlewares/Validators/auth.validator";
import auth from "../../Services/Authentication/Auth/Auth.tools";
import { defaultController } from "./router.config";

export default [
      {
        Route_name: "/auth",
        MethodName: "post",
        Middlewares: [auth],
        Controller: { run: defaultController, errorHandler: null },
      },
      {
        Route_name: "/auth/me",
        MethodName: "get",
        Middlewares: [auth],
        Controller: { run: defaultController, errorHandler: null },
      },
      {
        Route_name: "/auth",
        MethodName: "delete",
        Middlewares: [auth],
        Controller: { run: defaultController, errorHandler: null },
      },
      {
        Route_name: "/auth",
        MethodName: "delete",
        Middlewares: [auth],
        Controller: { run: defaultController, errorHandler: null },
      },
      {
        Route_name: "/login",
        MethodName: "put",
        Middlewares: [auth],
        Controller: { run: defaultController, errorHandler: null },
      },
      {
        Route_name: "/register",
        MethodName: "put",
        Middlewares: [authValidator.register],
        Controller: { run: controller.register, errorHandler: null },
      },
      {
        Route_name: "/logoff",
        MethodName: "put",
        Middlewares: [auth],
        Controller: { run: defaultController, errorHandler: null },
      },
]