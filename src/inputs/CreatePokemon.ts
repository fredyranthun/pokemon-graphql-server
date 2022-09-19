import { Field, InputType } from "type-graphql";

@InputType()
export class PokemonCreateInput {
  @Field()
  name: string;

  @Field()
  hp: number;

  @Field()
  attack: number;

  @Field()
  defense: number;

  @Field()
  spAttack: number;

  @Field()
  spDefense: number;

  @Field()
  speed: number;
}
