/* MONGO */
// const { findById, findByNameText, findByNameRegex } = require('../db-mongo/mHelper.js');

// const searchById = (req, res) => {
//   findById(req.query.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(404).send(err))
// }

// const searchByName = (req, res) => {
//   findByNameText(req.query.query)
//     .then(result => {
//       if (result.length < 1) {
//         findByNameRegex(req.query.query)
//           .then(products => res.status(200).send(products))
//       } else {
//         res.status(200).send(result)
//       }
//     })
//     .catch((err) => res.status(404).send(err))
// }

/* POSTGRESQL */
const { findById, findByName } = require('../db-pg/pHelper.js');
const searchById = (req, res) => {
  findById(req.query.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err))
}

const searchByName = (req, res) => {
  findByName(req.query.query)
  .then(result => res.status(200).send(result))
  .catch((err) => res.status(404).send(err));
}

module.exports = { searchById, searchByName};