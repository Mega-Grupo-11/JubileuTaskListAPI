-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN "resetToken" TEXT;
ALTER TABLE "Usuario" ADD COLUMN "tokenExpires" DATETIME;
