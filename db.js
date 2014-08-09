var sqlite3 = require('sqlite3').verbose();
var lineReader = require('line-reader');

var db = new sqlite3.Database('copygirl.db');

db.serialize(function() {
  db.run("CREATE TABLE girl_pic (id integer, url VARCHAR(2048), PRIMARY KEY (id))");

  var stmt = db.prepare("INSERT INTO girl_pic(url) VALUES (?)");
  
  lineReader.eachLine('tmp', function(line, last) {
    stmt.run(line);
    console.log(line);
  }).then(function () {
    stmt.finalize();
  });
  

  /* db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });*/
});

db.close();