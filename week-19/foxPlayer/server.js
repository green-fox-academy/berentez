const { response } = require('express');
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
//PLAYLIST ENDPOINTS
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

//delete playlist
app.delete('/playlist/:id', (req, res) => {
  const id = req.params.id;
  conn.query('SELECT * FROM foxplayer.playlist p WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).send('server error');
      return;
    } else if (result.length === 0) {
      res.status(404).json({ error: 'Playlist not found' });
      return;
    } else {
      const system = result[0].system;

      if (system === 1) {
        res.status(400).send({ error: 'This playlist is not deletable.' });
        return;
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

//PLAYLIST TRACKS

app.get('/playlist_tracks/', (req, res) => {
  conn.query('SELECT * FROM foxplayer.tracks', (err, result) => {
    if (err) {
      res.status(500).send();
      return;
    }
    res.status(200).json(result);
  });
});

app.get('/playlist_tracks/:playlist_id', (req, res) => {
  const { playlist_id } = req.params;
  conn.query(`SELECT * FROM foxplayer.tracks t WHERE t.playlist_id = ? `, [playlist_id], (err, result) => {
    if (err) {
      res.status(500).send();
      return;
    } else if (result.length === 0) {
      res.status(400).json({ error: 'No songs in this playlist' });
      return;
    } else {
      res.status(200).json(result);
    }
  });
});

app.post('/playlist_tracks/:playlist_id', (req, res) => {
  const { playlist_id } = req.params;
  const { title, artist, duration, path } = req.body;

  conn.query(`SELECT p.title FROM foxplayer.playlist p WHERE id = ?`, [playlist_id], (err, response) => {
    if (err) {
      res.status(500).send();
      return;
    } else if (response.length !== 1) {
      res.status(404).json({ error: 'No playlist found' });
      return;
    } else {
      conn.query(
        `SELECT t.title FROM foxplayer.tracks t WHERE t.playlist_id = ? AND t.title = ?`,
        [playlist_id, title],
        (err, result) => {
          if (err) {
            res.status(500).send();
            return;
          } else if (result.length !== 0) {
            res.status(400).json({ error: 'Already in your playlist' });
            return;
          } else {
            conn.query(
              `INSERT INTO foxplayer.tracks (playlist_id, title, artist, duration, path) VALUES (?, ?, ?, ?, ?)`,
              [playlist_id, title, artist, duration, path],
              (err, insertResponse) => {
                if (err) {
                  res.status(500);
                  return;
                }
                const resBody = {
                  id: insertResponse.id,
                  playlist_id,
                  title,
                  artist,
                  duration,
                  path,
                };
                res.status(200).json(resBody);
              }
            );
          }
        }
      );
    }
  });
});

app.delete('/playlist_tracks/:playlist_id/:tracks_id', (req, res) => {
  const { playlist_id, tracks_id } = req.params;

  conn.query(
    `SELECT * FROM foxplayer.tracks t WHERE t.playlist_id = ? AND t.id = ?`,
    [playlist_id, tracks_id],
    (err, selectRes) => {
      if (err) {
        res.status(500).send();
      } else if (selectRes.length !== 1) {
        res.status(400).json({ error: 'Not enough information for removing track from playlist' });
      } else {
        conn.query(
          `DELETE FROM foxplayer.tracks t WHERE t.playlist_id = ? AND t.id = ?`,
          [playlist_id, tracks_id],
          (err, deleteRes) => {
            if (err) {
              res.status(500).send();
              return;
            }
            res.status(200).json({ status: 'deleted' });
          }
        );
      }
    }
  );
});

//////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
