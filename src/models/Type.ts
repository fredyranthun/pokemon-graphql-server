import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Type {
  @Field((_type) => ID)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class PokemonType {
  @Field((_type) => ID)
  id: number;

  @Field()
  pokemonId: number;

  @Field()
  typeId: number;

  @Field((_type) => Type)
  type: Type;
}
