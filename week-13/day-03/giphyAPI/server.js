const express = require('express');
const app = express(); 
const path = require('path');
const PORT = 5000;

app. use(express.json());

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`I'm listening.`)
})