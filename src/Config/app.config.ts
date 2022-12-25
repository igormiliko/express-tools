import RouterTool from "../Router/Router.tool";
import express, {Express} from 'express'
import cors from "cors";
import helmet from "helmet";
import nocache from "nocache";
import TransformResponseTool from "../Util/TransformResponse.tool";

class APP_config {
    constructor(app: Express) {
        app.use(express.json({limit: "50mb"}))
        app.use(express.urlencoded({extended: true}))
        app.use(cors())
        app.use(helmet())
        app.use(nocache())
        RouterTool(app)
        app.use(TransformResponseTool)
    }
}

export default (app: Express) => new APP_config(app)