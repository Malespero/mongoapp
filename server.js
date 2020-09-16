const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;
require('./app/routes')(app, {});

app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});