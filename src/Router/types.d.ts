export type IHTTP_methods_config = (CR: IRouteConfig) => {
  get: Router;
  put: Router;
  post: Router;
  delete: Router;
};

export type TMiddlewareFunction = (...args: Texpress_params_route) => NextFunction | null

export interface IRouteConfig {
  Route_name: string;
  MethodName: TMETHODs_http;
  Middlewares: TMiddlewareFunction[];
  Controller: TMiddlewareFunction;
}
