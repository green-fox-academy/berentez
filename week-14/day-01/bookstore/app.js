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

app.get('/booktitle', (req, res) => {
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

app.get('/book', (req, res) => {
  connection.query(
    'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id',
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return null;
      }

      res.json(rows);
      console.log(rows);
    }
  );
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error', err.message);
  process.setMaxListeners(1);
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
