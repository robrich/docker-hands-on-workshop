const express = require('express');
const path = require('path');
const fs = require('fs');
const multipart = require('connect-multiparty');
const fsExtra = require('fs-extra');

var app = express();
var multipartMiddleware = multipart();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', multipartMiddleware, function(req, res){
  if (req.files && req.files.file && req.files.file.originalFilename) {
  	fsExtra.copySync(req.files.file.path, path.join(__dirname,'public', req.files.file.originalFilename));
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/files', function(req, res){
  fs.readdir(path.join(__dirname, 'public'), function(err, items) {
    res.statusCode = 200;
    res.json(items);
  });
});

var server = app.listen(3000, function(){
  console.log('Server listening on http://localhost:3000/');
});
