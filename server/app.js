const express = require('express');
const bodyParser = require('body-parser');
const {db} = require('./database');
const app = express();

// Setting up routing
app.use(bodyParser.json());
app.use('/api', require('./api'));

// Listener at port 8080
db.sync()
  .then(() => {
    app.listen(8080,() => console.log('Connected at 8080'));
  });