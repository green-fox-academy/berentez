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
    res.status(201).json();
  });
});

//list tasks
app.get('/api/todo', function (req, res) {
  conn.query('SELECT todo.id, todo.text, todo.completed FROM todos.todo', (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.status(200).json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//complete task

app.put('/api/todo/:id/complete', (req, res) => {
  const id = req.params.id;
  conn.query(`UPDATE todos.todo t SET t.completed = 1 WHERE t.id = ? `, [id], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    return res.sendStatus(200);
  });
});

//remove task

app.delete('/api/todo/:id/delete', (req, res) => {
  const id = req.params.id;
  conn.query(`DELETE FROM todos.todo t WHERE t.id = ? `, [id], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    return res.sendStatus(200);
  });
});
