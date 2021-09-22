// Imports
var express = require('express');
const expressLayouts = require('express-ejs-layouts')
var app = express();


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.sendFile('/public/home.html', {root: __dirname});
});
app.get('/about', function (req, res) {
  res.sendFile('/public/about.html', {root: __dirname});
});
app.get('/sammy', function (req, res) {
  res.sendFile('/public/Sammy.html', {root: __dirname});
});
app.get('/aidan', function (req, res) {
  res.render('aidan');
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
