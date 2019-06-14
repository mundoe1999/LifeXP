const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Setting up routing
app.use(bodyParser.json());
app.use('/api', require('./api'));

// Listener at port 8080
app.listen(8080,() => console.log('Connected at 8080'));