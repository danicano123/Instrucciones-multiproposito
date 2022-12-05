const db = require('mongoose');
db.Promise = global.Promise;

db.connect(
  'mongodb+srv://danicano:Danicano3264-@testdb.c5iv0kv.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log('[MongoDB in cloud]: successfully connected'))
  .catch((err) => console.log(err));
