import { Graphcool } from './generated/graphcool'
import { importSchema } from 'graphql-import'
import { GraphQLServer } from 'graphql-yoga'

import resolvers from './resolvers'

// Config --------------------------------------------------------------------

const APP_SCHEMA_PATH = './src/schema.graphql'

const typeDefs = importSchema(APP_SCHEMA_PATH)

// Server --------------------------------------------------------------------

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Graphcool({
      endpoint: process.env.GRAPHCOOL_ENDPOINT,
      secret: process.env.GRAPHCOOL_SECRET
    })
  }),
  options: { port: 5000 }
})

server.start(() => console.log(`Server is running on http://localhost:5000`))

// ---------------------------------------------------------------------------
