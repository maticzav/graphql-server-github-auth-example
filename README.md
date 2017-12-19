# GraphQL Server - Github Auth

This example shows how to implement Github Authentication with GraphQL Server,
using `graphql-yoga` and other tools.

## Getting started

### Initializing the Graphcool Database service
```sh
cd database
graphcool deploy # copy simple API endpoint into the `GRAPHCOOL_ENPOINT` env var in .env
```
> also copy your Graphcool Database secret to `GRAPHCOOL_SECRET` env var in .env

### Setting up the Github OAuth2

You need to configure these credentials from a new Github OAuth2 app as environment variables:

* `GITHUB_CLIENT_ID`
* `GITHUB_CLIENT_SECRET`

Read more [here](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps).

To manage your environment variables, you can use a tool like [direnv](https://direnv.net/).

### Starting the Server

```sh
yarn install
yarn start
# Open http://localhost:5000/
```

## Project structure

### Directories

* `database`: GraphQL database service definitions (using Graphcool)
* `src`: Source code of the gateway

### Files

* `.env`: Contains env vars (such as `GRAPHCOOL_ENPOINT` and `GRAPHCOOL_APIKEY`)
* `graphcool.yml`: Graphcool database definition
* `tsconfig.json`: Typescript compiler settings

## License
MIT
