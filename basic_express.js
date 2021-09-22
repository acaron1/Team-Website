// Imports
var express = require('express');
const expressLayouts = require('express-ejs-layouts')
var app = express();


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layout/layout')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/about', function (req, res) {
  res.render('about');
});
app.get('/sammy', function (req, res) {
  res.render('Sammy');
});
app.get('/aidan', function (req, res) {
  res.render('Aidan');
});
app.get('/abby', function (req, res) {
  res.render('Abby');
});
app.get('/jason', function (req, res) {
  res.render('Jason');
});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
