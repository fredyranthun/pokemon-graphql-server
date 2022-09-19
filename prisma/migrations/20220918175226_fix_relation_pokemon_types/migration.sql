/*
  Warnings:

  - You are about to drop the `_PokemonTypesToType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `typeId` to the `PokemonTypes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PokemonTypesToType" DROP CONSTRAINT "_PokemonTypesToType_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonTypesToType" DROP CONSTRAINT "_PokemonTypesToType_B_fkey";

-- AlterTable
ALTER TABLE "PokemonTypes" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_PokemonTypesToType";

-- AddForeignKey
ALTER TABLE "PokemonTypes" ADD CONSTRAINT "PokemonTypes_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
