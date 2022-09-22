import { Field, ID, ObjectType } from 'type-graphql'
import { PokemonType } from './Type'

@ObjectType()
export class Pokemon {
  @Field((_type) => ID)
  id: number

  @Field()
  name: string

  @Field()
  hp: number

  @Field()
  attack: number

  @Field()
  defense: number

  @Field()
  spAttack: number

  @Field()
  spDefense: number

  @Field()
  speed: number

  @Field((_type) => [PokemonType])
  types: PokemonType[]
}
