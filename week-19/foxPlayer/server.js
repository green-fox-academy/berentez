const express = require('express');
const mysql = require('mysql');
const { isReturnStatement } = require('typescript');

const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fZn4g',
  databas: 'foxplayer',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('Connecting to database');
});

app.use(express.json());
app.use('/', express.static('client/dist'));

//////////////////////////////////////////

//List playlist
app.get('/playlist', (req, res) => {
  conn.query('SELECT * FROM foxplayer.playlist', (err, result) => {
    if (err) {
      res.status(500).send();
      return;
    }
    res.status(200).json(result);
  });
});

//create new playlist

app.post('/playlist', (req, res) => {
  const { title } = req.body;
  conn.query('SELECT * FROM foxplayer.playlist p WHERE p.title = ?', [title], (err, result) => {
    if (err) {
      res.status(500).send('hups select has a server error');
      return;
    } else if (result.length !== 0) {
      res.status(400).send('Playlist already exist');
      return;
    } else {
      conn.query(`INSERT INTO foxplayer.playlist (title) VALUE (?)`, [title], (err, insertResult) => {
        if (err) {
          res.status(500).send('hups insert has a server error');
          return;
        }
        res.status(200).send(insertResult);
      });
    }
  });
});

app.delete('/playlist/:id', (req, res) => {
  const id = req.params.id;
  conn.query('SELECT * FROM foxplayer.playlist p WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).send('server error');
    } else if (result.length === 0) {
      res.status(404).json({ error: 'Playlist not found' });
    } else {
      const system = result[0].system;

      if (system === 1) {
        res.status(400).send({ error: 'This playlist is not deletable.' });
      } else {
        conn.query('DELETE FROM foxplayer.playlist p WHERE p.id = ?', [id], (err, result) => {
          if (err) {
            res.status(500).send('server error when trying to delete data');
          }
          res.status(204).send('deleted');
        });
      }
    }
  });
});
//////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
