const { findById, findByName } = require('../db-psql/index.js');

const searchById = (req, res) => {
  findById(req.query.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}

const searchByName = (req, res) => {
  findByName(req.query.query)
  .then(result => res.status(200).send(result))
  .catch((err) => res.status(404).send('Could not find product'));
}

const loader = (req, res) => {
  let queries = req.body.names
  let rand = Math.floor(Math.random() * queries.length);
  findByName(queries[rand])
    .then(result => res.status(200).send(result))
    .catch((err) => res.status(404).send('Could not find product'));
}

module.exports = { searchByName, loader, searchById };