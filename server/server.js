var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
  });
  console.log(req.body);

  todo.save().then(doc => {
    res.send(doc);
  }, e => {
    res.status(400).send(e);
    console.log(res.status());
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    // do not just send the array, makes you unflexible
    //    => res.send(todos)
    // transform to object, so you can add other properties like status code
    res.send({todos})
  }, e => {
    res.status(400).send(e);
  })
})

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };

// var newTodo = new Todo({
//   text: 'Take a bath',
// });
//
// newTodo.save().then(doc => {
//   console.log('save todo', doc);
// }, e => {
//   console.log('Unable to save todo')
// });
//
// var newUser = new User({
//   email: "sine007@gmail.com"
// });
//
// newUser.save().then(doc => {
//   console.log(doc);
// }, e => {
//   console.log('user gesaved')
// });