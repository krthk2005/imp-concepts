var express = require('express');
var http = require('http');
var _ = require('underscore')
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var path = require('path');

var students = require('./data/studentsData.json');
var file = './data/studentsData.json';
var PORT = process.env.PORT || 3000;


var app = express()
.use(bodyParser.urlencoded({
  extended: true
}))
.use(bodyParser.json())
.use(express.static(__dirname + '/public'))
.use('/lib', express.static(__dirname + '/node_modules'))
.use('/bower_components', express.static(__dirname + '/bower_components'));



app.get('/studentsData', function  (req, res) {
  res.json(jsonfile.readFileSync(file));
});

app.post('/addStudents', function  (req, res) {
  var obj = {};
  obj = _.pick(req.body, 'name', 'age');
  if(_.has(obj, "name") && _.has(obj, "age")){
    var allStudents = jsonfile.readFileSync(file);
    allStudents.push(obj);
    jsonfile.writeFileSync(file, allStudents);
    res.send("success");
  }else{
    res.send("record not inserted");
  }
});

app.get('/*', function(req, res) {
  // if (req.xhr) {
  //   return res.status(404).send(req.url + ' not found');
  // }
  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

 http.createServer(app).listen(PORT, function() {
    console.log("Server ready at " + PORT);
  });