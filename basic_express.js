// Imports
var express = require('express');
var path = require('path')
var app = express();
const fs = require('fs');
const url = require('url');
const bodyParser = require('body-parser');
//setup public folder
app.use(express.static(__dirname + '/public'));



app.use(express.urlencoded({ extended: true}));
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
app.get('/feedback',function(req, res){
  var rawcomments = fs.readFileSync('comments.json') // getting the json file data
  var comment = JSON.parse(rawcomments) // using json raw data to data
  const feedback = url.parse(req.url,true).query;

  if (feedback.name && feedback.adjective){
    var feedbackobjects = {name: feedback.name, adjective: feedback.adjective} // put the results in object form
    comment['comments'].push(feedbackobjects)
    console.log(comment);
    var sendcomments = JSON.stringify(comment)
    fs.writeFile('comments.json', sendcomments, 'utf8', function(){
      console.log('file is now written like a monkey');

    })
    res.render('feedback', {
      yell: "",
      comment: comment.comments // check if you not doing any querys
    })
  } else if (feedback.adjective == null || feedback.adjective == undefined){
    if (feedback.name == null || feedback.name == undefined){
      res.render('feedback', {
        yell: "",
        ccc: comment.comments // check if you not doing any querys
      })
    }else{
      res.send("you either forgot the name or adjective but now querys is not required.ps query still work")
    } // just tell there a another way to do it.
  }else{
    res.send("you either forgot the name or adjective but now querys is not required.ps query still work")
  }

});
app.post("/feedback",function(req, res){
  var rawcomments = fs.readFileSync('comments.json') //reading json file
  var comment = JSON.parse(rawcomments)// using json raw data to data
    for (number in comment.comments){
      if (number == req.body.Submit){
        console.log(comment.comments[number].name);
        comment['comments'].splice(number,1)
        var sendcomments = JSON.stringify(comment)
        fs.writeFile('comments.json', sendcomments, 'utf8', function(){ // send it to json file
        })


      }
    }

  if(req.body.Submit == 'delete'){
    let clearedObj = JSON.stringify({comments: []});
    fs.writeFile('comments.json', clearedObj, 'utf8', () => console.log("Cleared comments"));
    res.redirect('/feedback');
  }

  else if(req.body.name && req.body.adjective){
    var feedbackobjects = {name: req.body.name, adjective: req.body.adjective} // put the results into object form
    comment['comments'].push(feedbackobjects) // put it in the array //


    var sendcomments = JSON.stringify(comment) // stringify the comment to send to json
    fs.writeFile('comments.json', sendcomments, 'utf8', function(){ // send it to json file
    })
    console.log("comment log");
    res.redirect('/feedback')


  }else if (req.body.name){
    res.render('feedback', {
      yell: "YOU FORGOT THE ADJECTIVE silly monkey",
      ccc: comment.comments //if you forgotjust the adjective
    })
  } else {
    res.render('feedback', {
      yell: "silly strangers trix is for kids",
      ccc: comment.comments // well you are a stranger
    })
  }
});

var server = app.listen(2678, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
