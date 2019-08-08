require('newrelic');
const express = require('express');
const router = require('./router.js');
const cors = require('cors');

const port = process.env.PORT || 2001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', router);

app.use('/loaderio-f357707ebcd3743558a61f84e307a372', (req, res) => {
  res.send('loaderio-f357707ebcd3743558a61f84e307a372');
})

app.listen(port, () => console.log(`Listening on ${port}, smooth jazz`));