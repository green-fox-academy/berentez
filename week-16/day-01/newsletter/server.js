const express = require('express');

const app = express();

app.use('/signup', express.static('assets'));
app.use(express.json());

app.post('/signup', (req, res) => {
  const { username } = req.body;
  const { email } = req.body;

  res.json(`Thanks ${username}, we will send updates to ${email}`);
});

app.listen(3000, () => {
  console.log("I'm listening on 3000");
});
