const { findById, findByName } = require('../db-mongo/mHelper.js');

const searchById = (req, res) => {
  let id = req.query.query
  findById(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}

const searchByName = (req, res) => {
  findByName(req.query.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}

module.exports = { searchById , searchByName };