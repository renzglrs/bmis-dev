"use server"

import { revalidatePath } from "next/cache";
import prisma from "./db"
import { Prisma } from "@prisma/client";

export const getAllUsers = async () => {
    return await prisma.user.findMany({
        orderBy: {
            name: 'desc',
        }
    })
}