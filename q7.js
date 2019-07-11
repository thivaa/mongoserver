var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
var md= db.db("music1");
  md.collection("songdetails").deleteOne({"_id":5}, function(err, sd) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
