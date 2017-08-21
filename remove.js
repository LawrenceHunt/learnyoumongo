var mongo = require('mongodb').MongoClient;
var database = process.argv[2];
var collectionName = process.argv[3];
var id = process.argv[4];

mongo.connect('mongodb://localhost:27017/' + database, function(err, db) {
  var collection = db.collection(collectionName);
  collection.remove({
    _id: id
  }, function(err, docs) {
    if (err) throw err;
    db.close();
  })
});
