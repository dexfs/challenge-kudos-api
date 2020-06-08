# Requirements

- Node.js/ExpressJs
- knexjs - Query Builder.
- PostgreSQL
- Docker

There si a docker-compose with database configured if you want.

# How to run the code

```bash
# install dependencies using yarn or npm
$ npm install
```

## Run dev

```bash
$ npm run dev
```

## Build production

```bash
$ npm run build
```

The code will be on builds directory and you can run with

```bash
$ node builds/server.js
```

## Run tests

```bash
npm run test
```

## Run migrations

```bash
$ npm run db:migration
```

## Run rollback

```bash
$ npm run db:rollback
```

## Run rollback

```bash
$ npm run db:rollback
```

## Rund seed

```bash
$ npx knex seed:run
```

# Environment

- Sure you have a copy of .env.example, it's the base to create the enviroment file.

# Environments supported

- production

- development

- test

The project runs on port 3333

# ENDPOINTS FUNCIONAIS

> o id do usuário logado é enviado automáticamente nas chamadas utilizando o service api.js

- GET - /api/v1/users/all - Return users excetp who is calling this endpoint.
- POST - /api/v1/kudos

```json
{
  "kudo_id": "fcdcae75-e70e-4d24-8c10-c900c9bf7664",
  "from_user_id": 745268,
  "to_user_id": 176013,
  "comment": "teste"
}
```

- POST - /api/v1/me

```json
{
  "data": {
    "id": "745268",
    "login": "dexfs",
    "avatar_url": "https://avatars3.githubusercontent.com/u/745268?v=4",
    "github_profile": "https://github.com/dexfs",
    "name": "André Santos",
    "access_token": null,
    "userKudos": [
      {
        "quantity": 1,
        "kudo_id": "fcdcae75-e70e-4d24-8c10-c900c9bf7664",
        "kudo_name": "I learned"
      },
      {
        "quantity": 2,
        "kudo_id": "d6c55942-3698-47bf-8837-c43756dcee95",
        "kudo_name": "Was awesome"
      },
      {
        "quantity": 0,
        "kudo_id": "53a5486a-a19d-4da2-9519-d6f35594961a",
        "kudo_name": "I'm grateful"
      }
    ]
  }
}
```

POST - /authenticate - Github autentication

- payload

```json
{
  "client_id": "bb4edfcdf3eed5460adf",
  "redirect_uri": "http://localhost:3000/login",
  "client_secret": "44a24de017221e90426b5b994f5fb7b8f2f5e969",
  "code": "be250bd87892c2ff95fa"
}
```

The code is providade by github on the step on frontend to authorize the app.
