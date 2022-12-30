import { Request } from "express";
import { user } from "../Databases/prisma/Database/prisma/prisma-client-js";
import prisma_client from "../Databases/prisma/Prisma.client";

export class User {
  static async loginVerify(req: Request, password: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await prisma_client.user.findFirst({
          where: {
            email: {
              equals: req.body.email,
            },
            password: {
              equals: password,
            },
          },
          select: {
            email: true,
            name: true,
          },
        });
        return resolve(user)
      } catch (error) {
        return reject(error);
      }
    });
  }

  static async findMany() {
    return new Promise<user[] | null>(async (resolve, reject) => {
      try {
          const users = await prisma_client.user.findMany()
          resolve(users)
      } catch (error) {
        return reject(error)
      }
    })
  }
}
