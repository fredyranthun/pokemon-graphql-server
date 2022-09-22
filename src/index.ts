import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import path from 'path'
import { buildSchema } from 'type-graphql'
import { PokemonResolver } from './resolvers/PokemonResolver'
import { context } from './context'

async function main() {
  const schema = await buildSchema({
    resolvers: [PokemonResolver],
    emitSchemaFile: path.join(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema,
    context,
  })

  const { url } = await server.listen({ port: process.env.PORT || 4000 })

  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

main()
