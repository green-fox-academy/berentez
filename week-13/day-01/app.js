const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('assets'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});


//Doubling
app.get('/doubling', function(req, res){
  let number = req.query.input;
  let result = {}; 

  if (number === undefined){
    result = {"error": "Please provide an input!"}
  } else {
      result = {"received": number * 1, "result": number * 2}
  }
  res.end(JSON.stringify(result))
});


app.listen(3000);