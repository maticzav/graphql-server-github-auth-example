import { Context, ownsNote, AuthError } from '../../utils'

export const note = async (_, { id }, ctx: Context, info) => {
    const isOwner = ownsNote(ctx, id)
    return await ctx.db.query.note({ where: { id } })
}   