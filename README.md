# MUSIC SHOP BACKEND

## Installation and compilation

1 - Download the repository

2 - It is necessary to import the database located in the [db](./db) directory to obtain the base information such as countries, document types and areas for employee registration.

3 - Execute one of the following commands:

```bash
# Install the dependencies
$ npm install

# Run the application in development mode localhost:3000
$ npm run dev

# Compile for production and run the server
$ npm run build
$ npm start

```


## Directory structure

### `src`

This is the directory where all the application source code is located.

### `src/config`

This directory contains the configuration file for the database connection.

### `src/controllers`

This directory contains the controllers or application logic.

### `src/interfaces`

They are interfaces that will allow the application to recognize which data and data types are expected under a schema.

### `src/middleware`

In this directory there are code fragments that will be executed in the process when the path information arrives and before reaching the controller.

### `src/routes`

This directory contains the REST API routes to access the controllers through the different HTTP methods.

### `src/services`

The services are where all the business logic and functionalities expected in the platform are applied.

### `src/utils`

In this directory are the code fragments that will be needed and used at the general level of the application.

## Technologies Used

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Collections

<details>

### Colección de Instrumentos
```
GET /instruments            // Get all records.

GET /instruments/:id        // Get information by ID.

POST /instruments           // Add a new record.

PUT /instruments/:id        // Update an existing record.

DELETE /instruments/:id     // Delete an existing record.
```

<details>

### Fields required for the management of musical instruments
~~~
{
  name: string,
  price: number,
  currency: string,
  ranking: number,
}
~~~

</details>

### Collections of Auth
```
POST    /auth/login      // Log In

POST    /aut/register   // create users
```

