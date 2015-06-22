var MongoOplog = require('mongo-oplog');
var MONGODB_OPLOG_URL = process.env.MONGODB_OPLOG_URL;
var MONGODB_OPLOG_NS = process.env.MONGODB_OPLOG_NS;

var options = {};

var oplog = MongoOplog(MONGODB_OPLOG_URL, MONGODB_OPLOG_NS, options).tail();

oplog.on('op', function (data) {
  console.log(data);
});

oplog.on('insert', function (doc) {
  console.log(doc.op);
});

oplog.on('update', function (doc) {
  console.log(doc.op);
});

oplog.on('delete', function (doc) {
  console.log(doc.op._id);
});

oplog.on('error', function (error) {
  console.log(error);
});

oplog.on('end', function () {
  console.log('Stream ended');
});

oplog.stop(function () {
  console.log('server stopped');
});

