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

connection.connect(() => {});
