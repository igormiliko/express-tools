import auth from "../../Services/Authentication/Auth/Auth.tools";
import { defaultController } from "./router.config";

export default [
    {
        Route_name: "/role",
        MethodName: "get",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      },
      {
        Route_name: "/role",
        MethodName: "post",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      },
      {
        Route_name: "/role/:uuid",
        MethodName: "get",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      },
      {
        Route_name: "/role/:uuid",
        MethodName: "put",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      },
      {
        Route_name: "/role/:uuid",
        MethodName: "delete",
        Middlewares: [auth],
        Controller: { run: defaultController("Hello world!"), errorHandler: null },
      }
]