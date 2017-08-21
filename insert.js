var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var docs = db.collection('docs');
  var obj = { firstName: process.argv[2], lastName: process.argv[3] };
  docs.insert(obj);
  console.log(JSON.stringify(obj));
  db.close();
});
