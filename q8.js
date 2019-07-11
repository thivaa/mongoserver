var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var md = db.db("music1");
  var sd = [{"_id" :5, "Songname":"neethanea neethanea","Film": 24,"MusicDirector":"raman", "Singer":"santh"}
 
];
 md.collection("songdetails").insertMany(sd, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
 

