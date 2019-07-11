var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var md = db.db("music1");
  var sd = [{ "_id" : 1, "SongName" : "RojaPoonthottam", "Film" : "kannukkulNilavu", "MusicDirector" : "Ilaiyaraaja", "Singer" : "Unnikrishnan,AnuradhaSriram" },
{ _id : 2, "SongName" : "VennilavaeVennilavae", "Film" : "MinsaraKanavu", "MusicDirector" : "A.R.Rahman", "Singer" : "Hariharan,AnuradhaSriram" },
{ _id :3, "SongName" : "sollamalthottuchellum", "Film" : "Dheena", "MusicDirector" : "YuvanShankarRaja", "Singer" : "Hariharan" },
{ _id : 4, "SongName" : "ThaniyeThananthaniye", "Film" : "Rhythm", "MusicDirector" : "A.R.Rahman", "Singer" : "ShankarMahadevan" },
{ _id : 5, "Songname" : "Evano Oruvan", "Film" : "Alai Payuthey", "MusicDirector" : "A.R.Rahman", "Singer" : "Swarnalatha" }
 
];
 md.collection("songdetails").insertMany(sd, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
