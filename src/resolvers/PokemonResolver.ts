import 'reflect-metadata'
import { Context } from '../context'
import { Pokemon } from '../models/Pokemon'
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  // FieldResolver,
  // Root,
  Int,
} from 'type-graphql'
import { PokemonCreateInput } from '../inputs/CreatePokemon'
import { PokemonUpdateInput } from '../inputs/UpdatePokemon'

@Resolver(Pokemon)
export class PokemonResolver {
  @Query(() => [Pokemon])
  async pokemons(
    @Arg('take', () => Int, { nullable: true }) take: number = 50,
    @Arg('page', () => Int, { nullable: true }) page: number = 1,
    @Ctx() ctx: Context
  ) {
    const skip = (page - 1) * take

    return ctx.prisma.pokemon.findMany({
      include: {
        types: {
          include: {
            type: true,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
      take,
      skip,
    })
  }

  @Query(() => Pokemon, { nullable: true })
  async pokemon(
    @Arg('id', () => Int) id: number,
    @Ctx() ctx: Context
  ): Promise<Pokemon | null> {
    return ctx.prisma.pokemon.findUnique({
      where: {
        id,
      },
      include: {
        types: {
          include: {
            type: true,
          },
        },
      },
    })
  }

  @Mutation(() => Pokemon)
  async createPokemon(
    @Arg('data') data: PokemonCreateInput,
    @Ctx() ctx: Context
  ) {
    const pokemonsCount = await ctx.prisma.pokemon.count()

    const pokemon = await ctx.prisma.pokemon.create({
      data: {
        id: pokemonsCount + 1,
        ...data,
      },
    })

    return pokemon
  }

  @Mutation(() => Pokemon)
  async updatePokemon(
    @Arg('id', () => Int) id: number,
    @Arg('data') data: PokemonUpdateInput,
    @Ctx() ctx: Context
  ) {
    const pokemon = await ctx.prisma.pokemon.update({
      where: { id },
      data,
    })

    return pokemon
  }

  @Mutation(() => Pokemon)
  async deletePokemon(@Arg('id', () => Int) id: number, @Ctx() ctx: Context) {
    const pokemon = await ctx.prisma.pokemon.delete({
      where: { id },
    })

    return pokemon
  }
}
