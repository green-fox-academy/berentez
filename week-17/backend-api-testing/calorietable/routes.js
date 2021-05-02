const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fZn4g',
  database: 'calorietable',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connecting to db...success');
});

app.get('/drax', (req, res) => {
  conn.query(`SELECT * FROM calorietable.calorie`, (err, result) => {
    if (err) {
      res.status(500).send();
      return;
    }
    res.status(200).json(result);
  });
});

app.post('/drax', (req, res) => {
  const { name, amount, calorie } = req.body;
  //checking if it is already on the table or not
  conn.query('SELECT * FROM calorie WHERE name = ? AND amount = ?', [name, amount], (err, result) => {
    if (err) {
      res.status(500).send();
    } else if (result.length !== 0) {
      res.status(400).send();
    } else {
      //insertin new line
      conn.query(
        'INSERT INTO calorie (name, amount, calorie) VALUE (?, ?, ?)',
        [name, amount, calorie],
        (err, insertResult) => {
          if (err) {
            res.status(500).send();
            return;
          }
          res.status(200).send();
        }
      );
    }
  });
});

app.delete('/drax/:id', (req, res) => {
  const id = req.params.id;
  conn.query('SELECT id FROM calorie WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).send();
      return;
    } else if (result.length === 0) {
      res.status(404).send('Food is not in database');
    } else {
      conn.query('DELETE FROM calorie WHERE id = ?', [id], (err, result) => {
        if (err) {
          res.status(500).send();
          return;
        }
        res.status(204).send();
      });
    }
  });
});

module.exports = app;
