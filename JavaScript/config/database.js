import knex from 'knex'
const banco = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 2862,
    user: 'postgres',
    password: 'admin',
    database: 'DB_teste',
  },
});

export default banco;