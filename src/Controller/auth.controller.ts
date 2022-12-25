import { NextFunction, Request, Response } from "express";
import prisma_client from "../Databases/prisma/Prisma.client";
import { nextWrapper } from "./ControllerWraper.tools";
// Don't need put try/catch, just nextWrapper
class AuthController {
    async authenticate(res: Response, req: Request, nxt: NextFunction) {
        
    }

    async register(res: Response, req: Request, nxt: NextFunction){
        // const {email, password, name, country, phone } = req.body;
        const data = await prisma_client.user.create({
            data: {
                email: "eqwe@eqwe.com",
                name: "dasd",
                password: "12345678910"
            }
        })
        nxt({
            status:201,
            message: "Success!", 
            data,
        })
    }
}

const controller = new AuthController();
export { controller };

export default () => "Controllers don't have default export";
