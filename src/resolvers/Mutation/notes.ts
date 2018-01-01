import { Context, getUserId, ownsNote, AuthError } from '../../utils'

export const notes = {
    async createNote(_, { text }, ctx: Context, info) {
        const userId = getUserId(ctx)
        return await ctx.db.mutation.createNote({ data: {
            owner: { connect: { id: userId } },
            text
        }})
    },
    async updateNote(_, { id, text }, ctx: Context, info) {
        const isOwner = ownsNote(ctx, id)

        return await ctx.db.mutation.updateNote({
            where: { id },
            data: { text }
        })
    },
    async deleteNote(_, { id }, ctx: Context, info) {
        const isOwner = ownsNote(ctx, id)

        return await ctx.db.mutation.deleteNote({ 
            where: { id }
        })
    }
}


