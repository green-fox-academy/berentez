const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());
app.use('/todo', express.static('client/dist'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fZn4g',
  database: 'todos',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('Connecting to database...success');
});

/////////////////////////////////////////////////

//add task

app.post('/api/task', function (req, res) {
  const task = req.body.task;
  conn.query('INSERT INTO todos.todo (text, completed) VALUES (?, 0)', [task], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});

//list tasks
app.get('/api/todo', function (req, res) {});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
