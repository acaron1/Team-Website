var express = require('express');
var app = express();
app.use(express.static("public"))
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/about', function (req, res) {
  res.sendFile('/public/about.html', {root: __dirname});
});
app.get('/sammy', function (req, res) {
  res.sendFile('/public/Sammy.html', {root: __dirname});
});
app.get('/aidan', function (req, res) {
  res.sendFile('/public/Aidan.html', {root: __dirname});
});
app.get('/abby', function (req, res) {
  res.sendFile('/public/Abby.html', {root: __dirname});
});
app.get('/jason', function (req, res) {
  res.sendFile('/public/Jason.html', {root: __dirname});
});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
