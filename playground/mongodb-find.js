// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to DB server');
  }
  console.log('Connected to server');
  const db = client.db('TodoApp');

  db.collection('Users').find({name: 'Sine'}).count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch', err)
  });

  client.close();
});