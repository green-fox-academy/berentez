const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

const urlencodedParses = bodyParser.urlencoded({extended: false})

app.use(express.static('assets'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});


//Doubling
app.get('/doubling', function(req, res){
  res.render('doubling', {qs: req.query});
});

app.post('/doubling',  urlencodedParses, function(req, res){
  console.log(req.body);
  res.render('doubling', {qs: req.query});
});

app.listen(3000);