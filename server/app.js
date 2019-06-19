const express = require('express');
const bodyParser = require('body-parser');
const {db} = require('./database');
const app = express();
const PORT=5000;



// Setting up routing
app.use(bodyParser.json());
app.use('/api', require('./api'));

app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})
// Listener at port 8080
db.sync()
  .then(() => {
    app.listen(8080,() => console.log('Connected at 8080'));
  });