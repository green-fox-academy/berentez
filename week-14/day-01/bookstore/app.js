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

//check connection
connection.connect((err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('\x1b[32m', 'Database connection success');
});

app.use('/', express.static('assets'));
app.use(express.json());

app.get('/book', (req, res) => {
  //book_name query
  connection.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return null;
    }

    res.json(rows);
  });
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error', err.message);
  process.setMaxListeners(1);
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
