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

//trying out req.headers
app.get('/', function (request, response) {
  console.log(request.headers.user);
  response.send();
});

//This should be used somehow. It runs after the get method. its async
// async function gettingUsernameFromId(user) {
//   conn.query(`SELECT username FROM reddit.user WHERE userid = ${user}`, (err, result) => {
//     if (err) {
//       res.status(404).json({
//         error: err.message,
//       });
//       return;
//     }
//     const username = result[0].username;
//     console.log(username);
//     return username;
//   });
// }

app.get('/hello', (req, res) => {
  const user = req.headers.user;
  if (user === undefined) {
    res.send('hello world');
  } else {
    conn.query(`SELECT username FROM reddit.user WHERE userid = ${user}`, (err, result) => {
      if (err) {
        res.status(404).json({
          error: err.message,
        });
        return;
      }
      const username = result[0].username;
      res.send(`Hello ${username}!`);
    });
  }
});

app.get('/posts', (req, res) => {
  //header
  const user = req.headers.user;

  if (user === undefined) {
    conn.query(`SELECT * FROM reddit.post`, (err, results) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      const timestampRes = results.map((value) => {
        const timestamp = new Date(value.timestamp).getTime();
        return { ...value, timestamp };
      });

      res.status(200);
      res.json(timestampRes);
    });
  } else {
    conn.query(
      `SELECT post.id, post.title, post.url, post.timestamp, post.owner, SUM(vote) as score, vote.vote FROM post JOIN vote ON post.id = vote.postid WHERE postid>0`,
      (err, results) => {
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
      }
    );
  }
});

app.post('/posts', (req, res) => {
  const post = req.body;
  const title = post.title;
  const url = post.url;
  let owner = req.headers.user;

  if (owner === undefined) {
    owner = 'Anonymus';
  }

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

app.put(
  '/posts/:id/upvote',
  (req, res, next) => {
    const id = req.params.id;

    conn.query(`UPDATE post SET score = score + 1 WHERE id = ?`, [id], (err, result) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      return res.sendStatus(200);
    });
    next();
  },
  function (req, res) {
    const id = req.params.id;
    const user = req.headers.user;
    vote = 1;
    conn.query('INSERT INTO vote SET ?', { user, id, vote }, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      console.log('fut');
      res.status(200);
    });
  }
);

app.put('/posts/:id/downvote', (req, res) => {
  const id = req.params.id;
  conn.query(`UPDATE post SET score = score - 1, vote = -1 WHERE id = ?`, [id], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    return res.sendStatus(200);
  });
});

//UPDATE POST
app.put('/posts/:id', (req, res) => {
  const user = req.headers.user;
  console.log(user);
  const id = req.params.id;
  const title = req.body.title;
  const url = req.body.url;

  conn.query(
    `UPDATE post SET title = '${title}', url = '${url}', timestamp = CURRENT_TIMESTAMP WHERE id = ? AND owner = ?`,
    [id, user],
    (err, result) => {
      if (err) {
        res.sendStatus(500);

        return;
      }
      return res.sendStatus(200);
    }
  );
});

//DELETE
app.delete('/posts/:id', (req, res) => {
  const user = req.headers.user;
  const id = req.params.id;
  conn.query(`DELETE FROM post WHERE id = ? AND owner = ?`, [id, user], (err, result) => {
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
