var express = require('express'),
  http = require('http');
  var bodyParser = require('body-parser');

// var employees = require('./data/employees.json');
// var employeeModifications = [];


// var jsonfile = require('jsonfile')
// var util = require('util')

// var file = './data/employees.json'



var app = express()
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())
  .use(express.static(__dirname + '/public'))
  .use('/lib', express.static(__dirname + '/node_modules'))
  .use('/bower_components', express.static(__dirname + '/bower_components'));
 
// app.get('/employees', function  (req, res) {
//   res.json(jsonfile.readFileSync(file));
// });

// app.post('/employeeModifications', function  (req, res) {
//    jsonfile.writeFileSync(file, req.body)
//    res.send("success");
// });

app.get('/*', function(req, res) {
  // if (req.xhr) {
  //   return res.status(404).send(req.url + ' not found');
  // }
  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});