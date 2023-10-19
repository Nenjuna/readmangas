/*
  Warnings:

  - You are about to drop the column `mangaId` on the `Genre` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Genre" DROP CONSTRAINT "Genre_mangaId_fkey";

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "mangaId";

-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "genres" TEXT[];
