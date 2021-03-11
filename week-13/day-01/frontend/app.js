const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
app.use(express.json());

app.use(express.static('assets'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});


//Doubling
app.get('/doubling', function(req, res){
  let number = req.query.input;
  // or you can use -> const { number } = req,query;
  let result = {}; 

  if (number === undefined){
    result = {
      error: 'Please provide an input!'
    }
    res.json(result);
  } else {
    // had to multiply by one couse it becomes string.
    const double = parseInt(number) * 2;
      result = {
        'received': parseInt(number), 'result': double}
        res.json(result);
  }
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
 

//Do until

function sum(number){
  let result = 0;
  for (let i = number; i > 0; i--){
    result += i;
  }
  return result;
}

function factor(number){
  let result = 1;
  for (let i = number; i > 0; i--){
    result *= i;
  }
  return result;
}

app.post('/dountil/:action', (req, res) => {
  const params = req.params;
  const { action } = params;
  const { until: input } = req.body;
  const intInput = parseInt(input);

  if (input === undefined){
    const result = {
      error : "Please provide a number!"
    }
    res.json(result);
  } else if (action === 'sum'){
    result = sum(intInput);
    res.json({'result': result});
  } else if (action === 'factor'){
    result = factor(intInput);
    res.json({'result': result});

  }
}); 

app.listen(3000);