const express        = require('express');
const db             = require('./config/db');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
                        
    const db = database.db("note-api")
    collection = db.collection('notes')
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log('Server is running on port ' + port);
      });
    })
    //5f62d4ada844e212d20ee8d3
    //config contains only 1 db.js config with link 
    //module.exports = {
    //url : "mongodb+srv://newadmin-0:<pass>@cluster0.nig0o.mongodb.net/Cluster0?retryWrites=true&w=majority"
    //};