var mongo = require('mongo-wrapper')
geddy.db = mongo.db('localhost', 27017, 'our-convictions');
geddy.db.collection('users');
geddy.db.collection('groups');
geddy.db.collection('convictions');
geddy.db.collection('users');
geddy.db.collection('replies');
// Add uncaught-exception handler in prod-like environments
if (geddy.config.environment != 'development') {
  process.addListener('uncaughtException', function (err) {
    var msg = err.message;
    if (err.stack) {
      msg += '\n' + err.stack;
    }
    if (!msg) {
      msg = JSON.stringify(err);
    }
    geddy.log.error(msg);
  });
}

