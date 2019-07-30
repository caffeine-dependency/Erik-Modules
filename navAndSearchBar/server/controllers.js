// const { findById, findByName } = require('../db-mongo/mHelper.js');
const { findById, findByName } = require('../db-pg/pHelper.js');

const searchById = (req, res) => {
  let id = req.query.query;
  findById(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}

const searchByName = (req, res) => {
  let query = req.query.query;
  findByName(req.query.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}

module.exports = { searchById, searchByName};