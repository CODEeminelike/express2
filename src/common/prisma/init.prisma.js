import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

try {
  await prisma.$executeRaw`SELECT 1+1 AS result`;
  console.log("Prisma \t connected successfully");
} catch (error) {
  console.error("Primas error: ");
}
export default prisma;
