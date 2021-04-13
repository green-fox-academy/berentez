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

// function calculateScore(post) {
//   conn.query(`SELECT SUM(vote.vote) as score FROM vote WERE postId = ${post.id}`, (err, result) => {
//     if (err) {
//       res.status(500).json({
//         error: err.message,
//       });
//       return;
//     }
//     return result;
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

      // const score = timestampRes.map((value) => {
      //   const voteScore = calculateScore(value);
      //   return voteScore;
      // });

      // const ownerRes = timestampRes.map((value) => {
      //   const userName = gettingUsernameFromId(value);
      //   return { ...value, userName };
      // });

      res.status(200);
      res.json(timestampRes);
    });
  } else {
    // !!!!!!!!!!!!!!!!!!!!!!!!!
    //This is rally not working.
    //1) Just one post is displayed (it should be two in most cases)
    //2) WHERE userid = ${user} is no good, couse the users score will be summed not the posts
    //3) If I dont use this WHERE statement I got the score right but the vote will be the last searched.
    //4) I cannot wright a query which can do both
    //5) If I dont have a vote in my table I couldn't get back 0 for vote. I will get this back = [].

    conn.query(
      `SELECT post.id, post.title, post.url, post.timestamp, post.owner, SUM(vote.vote) as score, 
      vote.vote FROM post LEFT OUTER JOIN vote ON post.id =vote.postid  WHERE  userid = ?`,
      [user],
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
