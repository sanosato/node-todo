// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to DB server');
  }
  console.log('Connected to server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Climbing'}).then((result) => {
  //   console.log(result)
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Climbing'}).then((result) => {
  //   console.log(result)
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result)
  });
  // client.close();
});