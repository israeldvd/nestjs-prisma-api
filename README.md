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

Define a *_dotenv_* file (`.env`) having the necessary environment variables. For instance, it could come with the following:

```bash
# Database config
MYSQL_DB=nestjs-prisma-api
MYSQL_USER=root
MYSQL_PASSWORD=myrootpassword

DATABASE_URL=mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@mysql:3306/${MYSQL_DB}
```

If the 'api' service communicates with a _container_ from another _container_, use port 3306, as presented above, given the network interconnect; however, because of port mapping, or to access with an external client, use 3307—a manual setting for this project—or change the `docker-compose
yml` file.

## License

This project is [MIT licensed](LICENSE).
