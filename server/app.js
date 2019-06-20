const path = require("path);")
const express = require('express');
const bodyParser = require('body-parser');
const {db} = require('./database');
const app = express();
const PORT = process.env.PORT || 8080;

// Setting up routing
app.use(bodyParser.json());
app.use('/api', require('./api'));

let locationOfPublicFolder = path.join(__dirname, "client", "build");
app.use(express.static(locationOfPublicFolder));

// Listener at port 8080
db.sync()
  .then(() => {
    app.listen(PORT,() => console.log('Connected at ${PORT}'));
  });