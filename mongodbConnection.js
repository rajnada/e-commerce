var MongoClient = require('mongodb').MongoClient;


const client = new MongoClient('mongodb://localhost:27017');
client.connect();
const clientDB = client.db('e-commerce');

exports.db = clientDB;
