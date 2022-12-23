import RouterTool from "../Router/Router.tool";
import express, {Express} from 'express'
import cors from "cors";
import helmet from "helmet";
import nocache from "nocache";
{
    /*@@/           I           /@@*/
    /*@@/     APP middlewares    /@@*/
}

class APP_config {
    constructor(app: Express) {
        RouterTool(app)
        app.use(express.json({limit: "50mb"}))
        app.use(express.urlencoded({extended: true}))
        app.use(cors())
        app.use(helmet())
        app.use(nocache())
    }
}

export default (app: Express) => new APP_config(app)