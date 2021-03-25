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
  //header
  conn.query('SELECT * FROM post', (err, results) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
    // for (let i = 0; i < results.length; i++) {
    //   results[i].timestamp = new Date( results[i].timestamp).getTime();
    // }
    const timestampRes = results.map((value) => {
      const timestamp = new Date(value.timestamp).getTime();
      return { ...value, timestamp };
    });

    res.status(200);
    res.json(timestampRes);
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
    return res.sendStatus(201).setHeader('Content-Type', 'application/json');
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

app.put('/posts/:id', (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const url = req.body.url;

  conn.query(`UPDATE post SET title = '${title}', url = '${url}' WHERE id = ?`, [id], (err, result) => {
    if (err) {
      res.sendStatus(500);

      return;
    }
    return res.sendStatus(200);
  });
});

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  conn.query(`DELETE FROM post WHERE id = ?`, [id], (err, result) => {
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
