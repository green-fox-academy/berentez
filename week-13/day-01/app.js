const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('hey there!');
});

app.listen(3000);