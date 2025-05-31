-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "resetToken" TEXT,
ADD COLUMN     "tokenExpires" TIMESTAMP(3);
