// var { Client } = require('pg');
// const connectionString = 'postgres://jjlee@localhost:5432/sdc';
// const client = new Client({ connectionString });

// module.exports = client;

var { Pool } = require('pg');
const connectionString = 'postgres://jjlee@localhost:5432/sdc';
const pool = new Pool({ connectionString });

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = pool;