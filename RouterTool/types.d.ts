export type IHTTP_methods_config = (CR: IRouteConfig) => {
    get: Router;
    put: Router;
    post: Router;
    delete: Router;
  }