var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var md = db.db("music1");
  md.collection("songdetails").find({$and:[{"Singer" : "Hariharan,AnuradhaSriram"},{"Film" : "MinsaraKanavu"}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


