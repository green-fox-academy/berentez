const express = require('express');

const app = express();

app.use('/signup', express.static('assets'));
app.use(express.json());

app.post('/signup', (req, res) => {
  const sub = req.body;
  const name = sub.name;
  const email = sub.email;

  if (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("I'm listening on 3000");
});
