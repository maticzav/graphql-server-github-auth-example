import { me } from './Query/me'
import { auth } from './Mutation/auth'

export const resolvers = {
  Query: {
    me
  },
  Mutation: {
    ...auth
  }
}
