const client = require('../db-pg/index.js');
client.connect();

const findById = (id) => {
  return client.query(`SELECT * FROM search where id = ${id}`);
 }

const findByName = (query) => {
  const searchString = `%${query}%`;
  return client.query(`SELECT * FROM search WHERE name iLIKE '${searchString}' LIMIT 24`);
}

module.exports = { findById, findByName };