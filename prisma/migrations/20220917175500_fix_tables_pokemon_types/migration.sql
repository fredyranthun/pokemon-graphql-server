/*
  Warnings:

  - You are about to drop the column `attack` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `defense` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `hp` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `sp_attack` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `sp_defense` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Type` table. All the data in the column will be lost.
  - Added the required column `attack` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sp_attack` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sp_defense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "attack" INTEGER NOT NULL,
ADD COLUMN     "defense" INTEGER NOT NULL,
ADD COLUMN     "hp" INTEGER NOT NULL,
ADD COLUMN     "sp_attack" INTEGER NOT NULL,
ADD COLUMN     "sp_defense" INTEGER NOT NULL,
ADD COLUMN     "speed" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "attack",
DROP COLUMN "defense",
DROP COLUMN "hp",
DROP COLUMN "sp_attack",
DROP COLUMN "sp_defense",
DROP COLUMN "speed";
