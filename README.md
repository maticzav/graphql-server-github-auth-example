# GraphQL Server - Github Auth

This example shows how to implement Github Authentication with GraphQL Server,
using `graphql-yoga` and other tools.

## Getting started

### Initializing the Graphcool Database service

```sh
graphcool deploy # copy simple API endpoint into the `GRAPHCOOL_ENPOINT` env var in .env
```

### Setting up the Github OAuth2

You need to configure these credentials from a new Github OAuth2 app as environment variables:

* `GITHUB_CLIENT_ID`
* `GITHUB_CLIENT_SECRET`

1. Go to [github.com](github.com) and navigate to your profile. Click on your profile icon in the upper right corner and enter `Settings`.
2. In the lower left side find _Developer Settings_ and navigate to _OAuth Apps_.
3. Click `New OAuth App` and give your app a nice name. For the purposes of the example, it is best to set the _Homepage URL_ to `http://localhost:8000` and _Authorization callback URL_ to `http://localhost:8000/login`. (Application description is optional).
4. Register the application.
5. Copy _Client ID_ and _Client Secret_ to the __.env__ file.

#### Testing with WEB

* Replace `__CLIENT_ID__` in `login.html`
* Serve `login.html`, for example by using `python -m SimpleHTTPServer`
* Open `https://localhost:8000/login.html` in a browser, open the DevTools and authenticate with your Github account
* Copy the code printed in the Console of your DevTools

#### Testing with "simple hack"

In order to obtain `Github code` you can use this little hack.

1. Navigate to `https://github.com/login/oauth/authorize?client_id=<client_id>&scope=user` and replace `<client_id>` with your Github client ID.
2. Authorise access to the account and you will be redirected to `localhost:8000/login.html?code=<github_code>`.
3. Copy the `<github_code>` to your GraphQL playground where you can test authentication.

### Starting the Server

```sh
yarn install
yarn start
# Open http://localhost:5000/
```

## License
MIT
