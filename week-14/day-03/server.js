const express = require('express');
const mysql = require('mysql');
const app = express();

const PORT = 3005;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fZn4g',
  database: 'reddit',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection established to database');
});

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM post', (err, results) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }

    res.status(200).json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
