var { Pool, Client } = require('pg');
const connectionString = 'postgres://jjlee@localhost:5432/sdc';
const client = new Client({ connectionString });

module.exports = client;