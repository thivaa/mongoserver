var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var md = db.db("student1");

 md.collection("studentmarks").updateOne({ name: "Mala" }, { $inc: {maths_marks: 6} }, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
