const router = require('express').Router();
const { search, loader } = require('./controllers.js');

router
  .route('/search')
  .get(search);

router
  .route('/test')
  .post(loader);
  
module.exports = router;