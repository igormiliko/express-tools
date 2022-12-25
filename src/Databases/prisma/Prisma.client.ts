import { PrismaClient } from "./Database/prisma/prisma-client-js";

export class Prisma_client {
    private static instance: PrismaClient;
    private constructor() { }

    public static getInstance(): PrismaClient {
        if (!Prisma_client.instance) {
            Prisma_client.instance = new PrismaClient()
        }

        return Prisma_client.instance;
    }
}

const prisma_client = Prisma_client.getInstance()

export default prisma_client