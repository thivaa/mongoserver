var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var md = db.db("student1");
  md.collection("studentmarks").find({"maths_marks":{$gt:50}}, { projection: {_id:0,science_marks:0,english_marks:0} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
