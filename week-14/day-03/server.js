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

app.post('/posts', (req, res) => {
  const post = req.body;
  const title = post.title;
  const url = post.url;
  const owner = post.owner;

  conn.query('INSERT INTO post SET ?', { title, url, owner }, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    return res.sendStatus(201);
  });
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  conn.query('SELECT * FROM post WHERE post.id = ?', [id], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.status(200).json(result);
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  const id = req.params.id;
  const score = req.params.score;

  conn.query(`UPDATE post SET score = score + 1 WHERE id = ?`, [id], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    return res.sendStatus(200);
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  const id = req.params.id;
  const score = req.params.score;
  conn.query(`UPDATE post SET score = score - 1 WHERE id = ?`, [id], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    return res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
