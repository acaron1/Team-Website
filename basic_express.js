var express = require('express');
var app = express();
app.use(express.static("public"))
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/about', function (req, res) {
  res.send('about.html');
});
app.get('/sammy', function (req, res) {
  res.send('Sammy.html');
});
app.get('/aidan', function (req, res) {
  res.send('Aidan.html');
});
app.get('/abby', function (req, res) {
  res.send('Abby.html');
});
app.get('/jason', function (req, res) {
  res.send('Jason.html');
});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
