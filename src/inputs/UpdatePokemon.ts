import { Field, InputType } from "type-graphql";

@InputType()
export class PokemonUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  hp?: number;

  @Field({ nullable: true })
  attack?: number;

  @Field({ nullable: true })
  defense?: number;

  @Field({ nullable: true })
  spAttack?: number;

  @Field({ nullable: true })
  spDefense?: number;

  @Field({ nullable: true })
  speed?: number;
}
