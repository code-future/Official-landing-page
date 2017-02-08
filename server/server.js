var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');

//Creating the app
var app = express();

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/'), { maxAge: 31557600000 }));

//serving minified html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.min.html'))
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/404.min.html'))
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})