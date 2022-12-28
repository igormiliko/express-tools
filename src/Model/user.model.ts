import { Request } from "express";
import prisma_client from "../Databases/prisma/Prisma.client";

export class User {
  static findFirst(req: Request, password: string) {
    return new Promise((res, rej) => {
      try {
        res(
          (async () =>
            await prisma_client.user.findFirst({
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
            }))()
        );
      } catch (error) {
        return rej(error);
      }
    });
  }
}
