/*
  Warnings:

  - The primary key for the `PokemonTypes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "PokemonTypes" DROP CONSTRAINT "PokemonTypes_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PokemonTypes_pkey" PRIMARY KEY ("id");
