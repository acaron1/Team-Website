// Imports
var express = require('express');
var path = require('path')
var app = express();
const fs = require('fs');
//setup public folder
app.use(express.static(__dirname + '/public'));
// Set Templating Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

var rawdata = fs.readFileSync('profiles.json');
var readprofiles = JSON.parse(rawdata);

app.get('/', function (req, res) {
  res.render('home')
});
app.get('/about', function (req, res) {
  res.render('about')
});
app.get('/sammy', function (req, res) {
  res.render('profile' , {
  title: readprofiles.Sammy.name ,
  desc: readprofiles.Sammy.bio,
  spec: readprofiles.Sammy.spec,
  career: readprofiles.Sammy.career
})
});
app.get('/aidan', function (req, res) {
  res.render('profile' , {
    title: readprofiles.Aidan.name ,
    desc: readprofiles.Aidan.bio,
    spec: readprofiles.Aidan.spec,
    career: readprofiles.Aidan.career
})
});
app.get('/abby', function (req, res) {
  res.render('profile' , {
    title: readprofiles.Abby.name ,
    desc: readprofiles.Abby.bio,
    spec: readprofiles.Abby.spec,
    career: readprofiles.Abby.career
})
});
app.get('/jason', function (req, res) {
  res.render('profile' , {
    title: readprofiles.Jason.name ,
    desc: readprofiles.Jason.bio,
    spec: readprofiles.Jason.spec,
    career: readprofiles.Jason.career
})
});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
