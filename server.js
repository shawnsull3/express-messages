const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./db/pgconfig');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// app.use((req,res,next) => {
//   res.status(404).send('That route does not exist');
// });

app.get('/api/messages', (req,res) => {
  pool.getAll()
    .then(results => res.send(results))
    .catch(error => res.send(error));
});

app.post('/api/messages', (req,res) => {
  pool.createMessage(req.body.name, req.body.message)
    .then( () => res.sendStatus(201))
    .catch(error => res.send(error));
});


///////all api requests below will need an addtional param on the path//////
//get 1 message
app.get('/api/messages/:id', (req,res) => {
  console.log(req.params.id);
  pool.getMessage(req.params.id)
    .then(results => res.send(results))
    .catch(error => res.send(error));
});

// app.put('/api/messages/', (req,res) => {

// });

// app.delete('/api/messages/', (req,res) => {

// });





const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;


// if you are using mongo/mongoose uncomment this line
// const Message = require('./db/Message');
