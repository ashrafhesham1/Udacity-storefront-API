## Storefront API

an API that support a storefront application that mange users, orders , and products.

## Setup

### Installing dependencies & Packages :

    					`npm install`

### DataBase :

- set up your Postgres database parameters in `.env` in the project root -as shown below-
- in your terminal run the migrations to install the database schema : `db-migrate up` - make sure that you installed the API dependencies first -

- **at this point the API should be able to connect to the database and run without a problem**

- _note : in oreder to run the tests the test database must be empty_

### Running the server

after running the server it will start listenning on the port dedicated in `.env`

### Environment variables `.env`

    ENVIRONMENT = [environment]
    POSTGRES_HOST = [Your postgres host]
    POSTGRES_DB = [Your postgres database]
    POSTGRES_DB_TEST = [Your test postgres database]
    POSTGRES_USER = [Your postgres user]
    POSTGRES_PASSWORD = [Your postgres password]
    POSTGRES_PORT = [the port that the database will listen to]
    SERVER_HOST = [your server host]
    SERVER_PORT = [the port that the server will listen to]
    token_SECRET = [Your JWT secret]

## scripts

`"jasmine"`: **"jasmine",**

`"watch"`: **"tsc-watch --esModuleInterop src/server.ts --outDir ./dist --onSuccess \"node ./dist/server.js\""**,

`"build"`: **"npx tsc",**

`"test`": **"npm run build && npm run jasmine",**

`"start"`: **"npx nodemon src/index.ts"**

## Technologies

**node js**

**express js**

**type script**

**Postgre SQL**

**REST API**
