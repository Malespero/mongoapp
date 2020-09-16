module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        console.log(req.Body)
        res.send('Notes(blank for users)')
    });
  };