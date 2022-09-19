/*
  Warnings:

  - You are about to drop the `_PokemonToType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PokemonToType" DROP CONSTRAINT "_PokemonToType_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonToType" DROP CONSTRAINT "_PokemonToType_B_fkey";

-- DropTable
DROP TABLE "_PokemonToType";

-- CreateTable
CREATE TABLE "PokemonTypes" (
    "pokemonId" INTEGER NOT NULL,

    CONSTRAINT "PokemonTypes_pkey" PRIMARY KEY ("pokemonId")
);

-- CreateTable
CREATE TABLE "_PokemonTypesToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonTypesToType_AB_unique" ON "_PokemonTypesToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonTypesToType_B_index" ON "_PokemonTypesToType"("B");

-- AddForeignKey
ALTER TABLE "PokemonTypes" ADD CONSTRAINT "PokemonTypes_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonTypesToType" ADD CONSTRAINT "_PokemonTypesToType_A_fkey" FOREIGN KEY ("A") REFERENCES "PokemonTypes"("pokemonId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonTypesToType" ADD CONSTRAINT "_PokemonTypesToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
