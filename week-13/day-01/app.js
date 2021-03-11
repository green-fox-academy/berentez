const { application } = require('express');
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
    result = {'error': 'Please provide an input!'}
  } else {
    // had to multiply by one couse it becomes string.
      result = {'received': number * 1, 'result': number * 2}
  }
  res.end(JSON.stringify(result))
});



//Greeter

app.get('/greeter', function (req, res){

  const queryParams = req.query
  const name = queryParams.name;
  const title = queryParams.title;
  let result = {};

  if (name === undefined && title === undefined){
    result = {'error': 'Please provide a name and a title!'};
    res.status(400);
  } else if ( name === undefined){
      result = {'error': 'Please provide a title!'};
      res.status(400);
  } else if (title === undefined){
      result = {'error': 'Please provide a title!'};
      res.status(400);
  } else {
      result = {'welcome_message': `Oh, hi there ${name}, my dear ${title}!`}
      res.status(200);
  }

  res.end(JSON.stringify(result));

});

// AppendA
app.get('/appenda/:word', (req, res) => {
  const params = req.params;
  const {word} = params;

  if (word !== undefined){
    res.send({'appended': `${word}a`});
  }
});
 

app.listen(3000);