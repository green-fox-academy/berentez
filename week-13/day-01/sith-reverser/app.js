const express = require('express');
const app = express();
const PORT = 3000; 

app.use(express.json());

app.post('/sith', (req, res) => {
  const { text } = req.body;
  const fillerList = ['Arrgh', 'Uhmm', 'Err..err.err', 'Mmgh', 'Stop it now', 'SEAGULLS']
  const arrgh = function() {
    const randomIndex =  Math.floor(Math.random() * 6);
    return fillerList[randomIndex]
    }

  if (text === undefined){
    const response = {
      error: 'Feed me some text you have to, padawan young you are. Hmmm.'
    }
    res.json(response)
    return;
  }
  const textList = text.split(/\. |\./)
  textList.splice(textList.length - 1, 1);

  const data = []
 
  for (let sentence of textList){
    
    const wordList = sentence.split(' ');
    for (let i = 0; i < wordList.length - 1; i+=2){
      const container = wordList[i]; 
      wordList[i] = wordList[i + 1];
      wordList[i + 1] = container;
    }
    //Capital letter
    wordList[0] = wordList[0].split('');
    wordList[0][0] = wordList[0][0].toUpperCase();
    wordList[0] = wordList[0].join('');
    //not capital letter
    wordList[1] = wordList[1].toLowerCase();
  

    sentence = wordList.join(' ');
    data.push(sentence);
    for (let i = 0; i < Math.floor(Math.random() * 2) + 1; i++){
      data.push(arrgh())
    }
  }

  const newText = data.join('. ')

  const response = {
    sith_text: newText
  }

  res.json(response);
})

app.listen(PORT, () => {
  console.log(`App listens on http://localhost:${PORT}`)
});