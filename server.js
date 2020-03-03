const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./db/pgconfig'); // if you are using postgres, uncomment this line

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

app.post('/api/messages', (req,res) => {

});

app.get('/api/messages', (req,res) => {

});


///////all api requests below will need an addtional param on the path//////
//get 1 message
// app.get('/api/messages', (req,res) => {

// });

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
