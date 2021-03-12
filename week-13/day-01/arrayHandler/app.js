const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/arrays', (req, res) =>{
  const { what: math } = req.body;
  const { numbers } = req.body;

  if (math === undefined || numbers.length === 0){
    res.json({'error': 'Please provide what to do with the numbers!'})

  } else if ( math === 'sum'){
    //Sum 
    let result = 0;
    const sum = function() {
      for (let i = 0; i < numbers.length; i++){
        result += numbers[i];
      }
      return result;
    }
    res.json({result : sum()});

  } else if ( math === 'multiply'){
    //Multiply
    let result = 1;
    const multiply = function() {
      for (let number of numbers){
        result *= number;
      }
      return result;
    }
    res.json({result : multiply()});

  } else if ( math === 'double'){
    //Double
    const double = function() {
      for (let i= 0; i < numbers.length; i++){
        numbers[i] = numbers[i] * 2;
      }
      return numbers;
    }
    res.json({result : double()})
  }
  
})

app.listen(PORT, () => {
  console.log(`App listens on http://localhost:${PORT}`)
});