export const gates = (resolvers, permissions) => {
    let out = {}

    if (typeof resolvers === "object" && typeof permissions === 'object') {
        for (let key of Object.keys(resolvers)) {
            out[key] = gates(resolvers[key], permissions[key])
        }
    }

    return (parent, args, ctx, info) => permissions(args).then(() => resolvers(args))
}