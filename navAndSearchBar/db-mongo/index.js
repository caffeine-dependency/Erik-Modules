const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sdc", {useNewUrlParser: true});
var db = mongoose.connection;

db.once('open', function() {
  console.log('connected to db');
});

let searchSchema = mongoose.Schema({
  id: {type: Number, index: true},
  name: String,
  price: String,
  category: String,
  gender: String,
  image: String,
  rating: Number,
  numRatings: String,
  colors: [String],
  activities: [String],
  materials: [String]
});

let Search = mongoose.model('search', searchSchema, 'search');
module.exports = Search;