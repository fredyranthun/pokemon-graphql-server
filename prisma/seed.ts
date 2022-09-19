import { Pokemon, Type, PrismaClient } from "@prisma/client";
import path from "path";

const client = new PrismaClient();

type PokemonInput = {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
};

type TypeInput = {
  english: string;
  chinese: string;
  japanese: string;
};

async function seed() {
  const pokemonsPath = path.join(__dirname, "..", "pokemon.json");
  const pokemons: PokemonInput[] = require(pokemonsPath);

  const typesPath = path.join(__dirname, "..", "types.json");
  const types: TypeInput[] = require(typesPath);

  const typeRecords = await Promise.all(
    types.map((type) => {
      return client.type.create({
        data: {
          name: type.english,
        },
      });
    })
  );

  const typeMap: Record<string, Type> = {};

  typeRecords.forEach((type) => {
    typeMap[type.name] = type;
  });

  await Promise.all(
    pokemons.map((pokemon) => {
      return client.pokemon.create({
        data: {
          id: pokemon.id,
          name: pokemon.name.english,
          hp: pokemon.base.HP,
          attack: pokemon.base.Attack,
          defense: pokemon.base.Defense,
          spAttack: pokemon.base["Sp. Attack"],
          spDefense: pokemon.base["Sp. Defense"],
          speed: pokemon.base.Speed,
          types: {
            createMany: {
              data: pokemon.type.map((type) => {
                return {
                  typeId: typeMap[type].id,
                };
              }),
            },
          },
        },
      });
    })
  );
}

seed();
