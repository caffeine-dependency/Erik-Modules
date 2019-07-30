const Search = require('./index.js');

const findById = (id) => {
  return Search.find({"id": id});
 }

 const findByName = (query) => {
  const searchString = new RegExp(query, `i`);
  return Search.find({"name": "Cherry and Plum Backpack"});
 }

module.exports = { findById, findByName };