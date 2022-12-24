import auth from "../../Services/Authentication/Auth/Auth.tools";
import { defaultController } from "./router.config";

export default [
    {
        Route_name: "/user",
        MethodName: "get",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      },
      {
        Route_name: "/user",
        MethodName: "post",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      },
      {
        Route_name: "/user/:uuid",
        MethodName: "get",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      },
      {
        Route_name: "/user/:uuid",
        MethodName: "put",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      },
      {
        Route_name: "/user/:uuid",
        MethodName: "delete",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      }
]