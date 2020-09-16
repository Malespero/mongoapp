const express        = require('express');
const db             = require('./config/db');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
                        
    // Make sure you add the database name and not the collection name
    const db = database.db("note-api")
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log('Server is running on port ' + port);
      });
    })