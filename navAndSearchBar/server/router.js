const router = require('express').Router();
const { searchById , searchByName } = require('./controllers.js');


router
  .route('/id')
  .get(searchById);

router
  .route('/name')
  .get(searchByName)
module.exports = router;