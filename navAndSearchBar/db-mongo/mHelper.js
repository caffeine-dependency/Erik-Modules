const Search = require('./index.js');

const findById = () => {
   console.log('inhelpers');
  return Search.find({"_id": "5d3b7d5183d9b82b29f81aad"});
 }

 const findByName = (query) => {
  const searchString = new RegExp(query, `i`);
  return Search.find({"name": "Cherry and Plum Backpack"});
 }

module.exports = { findById, findByName };