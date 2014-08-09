var express = require('express')
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('copygirl.db');
var app = express()

// Access-Control-Allow-Origin
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/2/:id', function (req, res) {
  id = Number(req.params.id)
  if (!id){
    res.send('')
  }
  db.all("SELECT url FROM girl_pic where id > ? and id <= ?", [id, id + 2], function(err, row) {
    console.dir(row);
    res.send({
      'T6': row[0].url,
      'T0': row[1].url,
    })
  });
})

app.get('/5/:id', function (req, res) {
  id = Number(req.params.id)
  if (!id){
    res.send('')
  }
  db.all("SELECT url FROM girl_pic where id > ? and id <= ?", [id, id + 5], function(err, row) {
    console.dir(row);
    res.send({
      'T1': row[0].url,
      'T2': row[1].url,
      'T3': row[2].url,
      'T4': row[3].url,
      'T5': row[4].url,
    })
  });
})

app.listen(3000)