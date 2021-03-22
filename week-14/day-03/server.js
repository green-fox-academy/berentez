const express = require('express');
const mysql = require('mysql');
const app = express();

const PORT = 3005;

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
