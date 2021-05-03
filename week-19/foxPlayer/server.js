const express = require('express');
const mysql = require('mysql');

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
