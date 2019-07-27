const { findById, findByName } = require('../db-mongo/mHelper.js');

const search = (req, res) => {
  console.log('in controllers', req.query.query)
  findById()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
  
  // findByName(req.query.query)
  //   .then((result) => res.status(200).send(result))
  //   .catch((err) => res.status(404).send(err))
}

module.exports = search;