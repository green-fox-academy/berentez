const express = require('express');
const mysql = require('mysql');
const app = express();

const PORT = 3005;

app.use(express.json());
app.use('/', express.static('dist'));

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
      `SELECT fs.id, fs.title, fs.url, fs.timestamp, ifnull(u.username, 'Anonymus') AS owner, fs.score, IFNULL(v2.vote, 0) AS vote 
      FROM (SELECT p.id, p.title, p.url, p.timestamp, p.owner, ifNULL(SUM( v.vote ), 0)  AS score 
      FROM reddit.post p 
      LEFT JOIN reddit.vote v on p.id = v.postid 
      GROUP BY p.id ) AS fs 
      LEFT JOIN reddit.vote v2 ON fs.id = v2.postid and userid =? LEFT JOIN reddit.user u ON fs.owner = u.userid`,
      [user],
      (err, results) => {
        if (err) {
          res.status(500).json({
            error: err.message,
          });
          return;
        }

        //Alternative
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

//Posting works as intented
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

//Same problem as listing all the posts
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const user = req.headers.user;
  conn.query(
    `SELECT fs.id, fs.title, fs.url, fs.timestamp, ifnull(u.username, 'Anonymus') AS owner, fs.score, IFNULL(v2.vote, 0) as vote FROM (SELECT p.id, p.title, p.url, p.timestamp, p.owner, ifNULL(SUM( v.vote ), 0)  as score FROM reddit.post p LEFT Join reddit.vote v on p.id = v.postid 
    GROUP BY p.id ) as fs LEFT JOIN reddit.vote v2 ON fs.id = v2.postid and userid = ?  LEFT JOIN reddit.user u ON fs.owner = u.userid WHERE fs.id =  ?`,
    [user, id],
    (err, result) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.status(200).json(result);
    }
  );
});

//UPVOTE
app.put('/posts/:id/upvote', (req, res, next) => {
  const id = req.params.id;
  const user = req.headers.user;

  //Checking db for data
  conn.query(`SELECT * FROM vote v WHERE v.postid = ? AND v.userid = ?`, [id, user], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    const post = JSON.stringify(result[0]);
    //adding new raw to db
    if (post === undefined) {
      conn.query(`INSERT INTO reddit.vote VALUE (NULL, ?, ?, 1)`, [id, user], (err, result) => {
        if (err) {
          res.sendStatus(500);
          return;
        }

        return res.sendStatus(200);
      });
    } else {
      const data = JSON.stringify(result[0].vote);
      // 1 => 0
      if (data === '1') {
        conn.query(`UPDATE reddit.vote v SET v.vote = 0 WHERE postid = ? AND userid = ?`, [id, user], (err, result) => {
          if (err) {
            res.sendStatus(500);
            return;
          }
          console.log(0);
          return res.sendStatus(200);
        });
        // 0 => 1
      } else if (data === '0' || data === '-1') {
        conn.query(`UPDATE reddit.vote v SET v.vote = 1 WHERE postid = ? AND userid = ?`, [id, user], (err, result) => {
          if (err) {
            res.sendStatus(500);
            return;
          }
          console.log(1);
          return res.sendStatus(200);
        });
      }
    }
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  const id = req.params.id;
  const user = req.headers.user;

  //Checking db for data
  conn.query(`SELECT * FROM vote v WHERE v.postid = ? AND v.userid = ?`, [id, user], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    const post = JSON.stringify(result[0]);
    //adding new raw to db
    if (post === undefined) {
      conn.query(`INSERT INTO reddit.vote VALUE (NULL, ?, ?, -1)`, [id, user], (err, result) => {
        if (err) {
          res.sendStatus(500);
          return;
        }

        return res.sendStatus(200);
      });
    } else {
      const data = JSON.stringify(result[0].vote);
      //-1 => 0
      if (data === '-1') {
        conn.query(`UPDATE reddit.vote v SET v.vote = 0 WHERE postid = ? AND userid = ?`, [id, user], (err, result) => {
          if (err) {
            res.sendStatus(500);
            return;
          }
          console.log(0);
          return res.sendStatus(200);
        });
        // 0 => -1
      } else if (data === '0' || data === '1') {
        conn.query(
          `UPDATE reddit.vote v SET v.vote = -1 WHERE postid = ? AND userid = ?`,
          [id, user],
          (err, result) => {
            if (err) {
              res.sendStatus(500);
              return;
            }
            console.log(1);
            return res.sendStatus(200);
          }
        );
      }
    }
  });
});

//UPDATE POST
app.put('/posts/:id', (req, res) => {
  const user = req.headers.user;
  const id = req.params.id;
  const title = req.body.title;
  const url = req.body.url;
  let owner = '';

  //getting owner
  conn.query(`SELECT * FROM reddit.post p WHERE p.id = ?`, [id], (err, result, next) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    owner = JSON.stringify(result[0].owner);

    if (user === owner) {
      conn.query(
        `UPDATE post SET title = ?, url = ?, timestamp = CURRENT_TIMESTAMP WHERE id = ? AND owner = ?`,
        [title, url, id, user],
        (err, result) => {
          if (err) {
            res.sendStatus(500);

            return;
          }
          return res.sendStatus(200);
        }
      );
    } else {
      console.log("You can't update this post!");
      res.sendStatus(200);
    }
  });
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
