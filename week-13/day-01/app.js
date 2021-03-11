const express = require('express');
const fs = require('fs');
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
 

//Do until

function sum(number){
  let result = 0;
  for (let i = number; i > 0; i--){
    result += i;
  }
  return result;
}

app.use(express.json());

app.post('/dountil/:action', (req, res) => {

  console.log(req.body);
  
  try {
    fs.writeFileSync('dountil.json', JSON.stringify(req.body));
    res.status(200).send();
  }
  catch(err){
    res.status(500);
  }
  const params = req.params;
  const {action} = params;

  if (action === 'sum'){
    try {
      const data = JSON.parse(fs.readFileSync('dountil.json', 'utf-8' ));
      console.log(data)

      res.status(200).send({'result': sum(Object.values(data)[0])});
    }
    catch {
      res.status(500).send();
    }
    
  }
}); 

// app.get('/dountil/:action', (req, res) => {
//   const params = req.params;
//   console.log(params)
//   const {action} = params;
//   console.log(action)

//   if (action === 'sum'){
//     try {
//       const data = JSON.parse(fs.readFileSync('dountil.json', 'utf-8' ));
//       console.log(data)

//       res.status(200).send({'result': sum(Object.values(data)[0])});
//     }
//     catch {
//       res.status(500).send();
//     }
    
//   }

// });

app.listen(3000);