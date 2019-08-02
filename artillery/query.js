const { categories } = require('./db-mongo/dataGen/dataGen.json');

function setupSomeData(context, events, done) {
  let q = categories[Math.floor(Math.random() * 25)];
  context.vars['query'] = q;

  return done();
}
module.exports = { setupSomeData }
