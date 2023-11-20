import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// to provent hot reload to initialize multiple instance of PrismaClient, we first check if global.prisma
// contains the instance. global.prisma is excluded from hot reload so it will persist between reloads.
export const db = global.prisma || new PrismaClient();

// id Dev we make the db = the instance stored in global.prisma
if (process.env.NODE_ENV !== "production") global.prisma = db;
