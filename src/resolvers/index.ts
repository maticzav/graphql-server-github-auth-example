import { me } from './Query/me'
import { note } from './Query/note'
import { auth } from './Mutation/auth'
import { notes } from './Mutation/notes'

// Permissions
import { gates } from './gates'
import { getUserId, isNoteOwner } from '../utils';

const requiresAuth = (_, args, ctx, info) => getUserId(ctx)
const ownsNote = (_, { id }, ctx, info) => isNoteOwner(ctx, id)

const permissions = {
  Query: {
    me: requiresAuth,
    note: ownsNote
  },
  Mutation: {
    authenticate: () => true,
    createNote: requiresAuth,
    updateNote: ownsNote,
    deleteNote: ownsNote
  }
}

// Resolvers

const resolvers = {
  Query: {
    me,
    note,
  },
  Mutation: {
    ...auth,
    ...notes
  }
}

export default gates(resolvers, permissions)