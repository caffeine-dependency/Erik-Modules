const  findByName  = require('../db-psql/index.js');

const search = (req, res) => {
  findByName(req.query.query)
  .then(result => res.status(200).send(result))
  .catch((err) => res.status(404).send('Could not find product'));
}

module.exports = search;