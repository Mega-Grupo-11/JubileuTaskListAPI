/*
  Warnings:

  - Changed the type of `prioridade` on the `Tarefa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Prioridade" AS ENUM ('BAIXA', 'MEDIA', 'ALTA');

-- AlterTable
ALTER TABLE "Tarefa" ALTER COLUMN "dataPrevista" SET DATA TYPE TIMESTAMP(3),
DROP COLUMN "prioridade",
ADD COLUMN     "prioridade" "Prioridade" NOT NULL,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);
