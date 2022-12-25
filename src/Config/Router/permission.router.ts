import auth from "../../Services/Authentication/Auth/Auth.tools";
import { defaultController } from "./router.config";

export default [
  {
    Route_name: "/permission",
    MethodName: "get",
    Middlewares: [auth],
    Controller: { run: defaultController, errorHandler: null },
  },
  {
    Route_name: "/permission",
    MethodName: "post",
    Middlewares: [auth],
    Controller: { run: defaultController, errorHandler: null },
  },
  {
    Route_name: "/permission/:uuid",
    MethodName: "get",
    Middlewares: [auth],
    Controller: { run: defaultController, errorHandler: null },
  },
  {
    Route_name: "/permission/:uuid",
    MethodName: "put",
    Middlewares: [auth],
    Controller: { run: defaultController, errorHandler: null },
  },
  {
    Route_name: "/permission/:uuid",
    MethodName: "delete",
    Middlewares: [auth],
    Controller: { run: defaultController, errorHandler: null },
  },
];
