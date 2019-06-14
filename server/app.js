const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.json());
app.use('/api', require('./api'));


app.listen(8080,() => console.log('We working at 8080 boys!'))