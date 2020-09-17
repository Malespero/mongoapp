var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    
    //Создание заметки(будущего пользователя)
    app.post('/notes', (req, res) => {
        const note = { title: req.body.title, text: req.body.body };
        db.collection('notes').insert(note, (err, result) => {
            if (err) { 
                res.send({ 'error': 'PostError' }); 
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //Получение заметки
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'GetError'});
            } 
            else {
                res.send(item);
        } 
        });
    });

    //Удаление заметки
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err, item) => {
          if (err) {
            res.send({'error':'DeleteError'});
          } else {
            res.send('Note ' + id + ' deleted!');
          } 
        });
    });

    //Обновление заметки
    app.put ('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, result) => {
            if (err) {
                res.send({'error':'PutError'});
            } else {
                res.send(note);
            } 
        });
    });


};