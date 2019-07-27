const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sdc", {useNewUrlParser: true});
var db = mongoose.connection;

db.once('open', function() {
  console.log('connected to db');
});

let searchSchema = mongoose.Schema({
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

// var mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/sdc', {useNewUrlParser: true});

// var connection = mongoose.connection;

// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function () {

//     connection.db.collection("search", function(err, collection){
//         collection.find({}).toArray(function(err, data){
//             console.log(data); // it will print your collection data
//         })
//     });

// });