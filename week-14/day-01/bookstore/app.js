import express from 'express';
import mysql from 'mysql';

// Create an API endpoint that lists all book titles
// Return an HTML file containing this list

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fZn4g',
  database: 'bookinfo',
});

connection.connect((err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('\x1b[32m', 'Database connection success');
});

connection.query('SELECT book_name FROM book_mast;', (err, rows) => {
  if (err) {
    console.error(`Cannot retreive data: ${err.toString()}`);
    return null;
  }

  console.log('Data received from database');
  console.log(rows);
  return rows;
});