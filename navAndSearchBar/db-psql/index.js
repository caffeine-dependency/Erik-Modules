const { ROLE , PW, ADDRESS } = require('../../psql.config.js');
const { Pool } = require('pg');

const connectionString = `postgres://${ROLE}:${PW}@${ADDRESS}:5432/sdc`;
const pool = new Pool({ connectionString });

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

pool.connect();

const findById = (id) => {
  return client.query(`SELECT * FROM search where id = ${id}`);
}

const findByName = (query) => {
  const searchString = `%${query}%`;
  return pool.query(`SELECT * FROM search WHERE name iLIKE '${searchString}' LIMIT 24`);
}

module.exports = { findById, findByName };