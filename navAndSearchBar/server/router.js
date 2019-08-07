const router = require('express').Router();
const { searchByName, loader, searchById } = require('./controllers.js');

router
  .route('/search')
  .get(searchByName);

router
  .route('/id')
  .get(searchById);

router
  .route('/test')
  .post(loader);
  
module.exports = router;