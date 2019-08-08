const Search = require('./index.js');

const findById = (id) => {
  return Search.find({ id });
 }

const findByNameText = (query) => {
  
  return Search.find({$text: { $search: query }}).limit(24)
}

const findByNameRegex = (query) => {
  const searchString = new RegExp(query, `i`);
  return Search.find({ name: searchString }).limit(24)
  // return Search.find({ name: { $regex: query, $options: 'i' }}).limit(24);
}

module.exports = { findById, findByNameText, findByNameRegex };