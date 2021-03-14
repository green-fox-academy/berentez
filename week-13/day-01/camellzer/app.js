const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/translate', (req, res) => {
  const { text } = req.body;
  const vowel = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű'];
  //Undefined
  if (text === undefined){
    const response = {
      error: "I can't translate that!"
    }
    res.json(response);
    return;
  }

  const words = text.split(' ');
  for (let i = 0; i < words.length; i++){
    const letters = words[i].split('');
    for (let n = 0; n < letters.length; n++){
      if (vowel.includes(letters[n].toLowerCase())){
        letters[n] = letters[n] + 'v' + letters[n].toLowerCase();
      }
    }

    words[i] = letters.join('')
  }

  const teveText = words.join(' ')
  const response = {
    translated: teveText, lang: 'teve'
  }

  res.json(response)

});

app.listen(PORT, () => {
  console.log(`App listens on http://localhost:${PORT}`)
});