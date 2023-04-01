# NestJS API

Repository of an API based on [Nest](https://github.com/nestjs/nest) _framework_, using ORM / Prisma.

## Installation

Clone the repository, go to the new folder and install the dependencies (NodeJS is necessary) through the command

```bash
npm install
```

## Running _app_

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Variáveis de ambiente

Defina um arquivo `.env` contendo as variáveis de ambiente necessárias. Por exemplo, a aplicação pode ter:

```bash
# Database config
MYSQL_DB=nestjs-prisma-api
MYSQL_USER=root
MYSQL_PASSWORD=myrootpassword

DATABASE_URL=mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@localhost:3307/${MYSQL_DB}
```

## License

This project is [MIT licensed](LICENSE).
