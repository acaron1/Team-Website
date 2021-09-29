// Imports
var express = require('express');
var path = require('path')
var app = express();

//setup public folder
app.use(express.static(__dirname + '/public'));
// Set Templating Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home')
});
app.get('/about', function (req, res) {
  res.render('about')
});
app.get('/sammy', function (req, res) {
  res.render('profile' , {
  title: "About Sammy" ,
  desc: "Sammy is a senior in computer programming at York County School of Technology. They use They/Them pronouns",
  spec: "Sammy specializes in CSS and HTML",
  career: "However Sammy does not want to go it the IT field and intends to go to college for Fashion after they graduate" + "<br>" + "<button type='button' onclick= window.location.href='/' >To Homepage</button>"
})
});
app.get('/aidan', function (req, res) {
  res.render('profile' , {
  title:"Aidan Hamme" ,
  desc:"Aidan is a student of York Tech, and is in IT." ,
  spec:"Aidan's specialties are: HTML, finding errors, and looking for answers in coding." ,
  career:"Aidan Career Goals: Work on making games, do web development, and software development."  + "<br>" + "<button type='button' onclick= window.location.href='/' >To Homepage</button>"
})
});
app.get('/abby', function (req, res) {
  res.render('profile' , {
  title:"About Abby",
  desc:"Abby is a junior in computer programming at York County School of Technology.",
  spec:"Abby does not specialize in any spefic programming language",
  career:"Abby want to go into the military after highschool and eventually get a degree in visual effects." + "<br>" + "<button type='button' onclick= window.location.href='/' >To Homepage</button>"
})
});
app.get('/jason', function (req, res) {
  res.render('profile' , {
  title: "About jason",
  desc: "Jason is a sad boi",
  spec: "Jason specializes in depression",
  career: "Making games to get myself out of depression" + "<br>" + "<button type='button' onclick= window.location.href='/' >To Homepage</button>"
})
});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
