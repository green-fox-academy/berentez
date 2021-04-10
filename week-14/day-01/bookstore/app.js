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
  console.log('\u001b[36m', 'Database connection success');
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
  const sqlString =
    'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id';

  const query = req.query;
  let where = '';

  //If there's no query
  if (Object.keys(query).length === 0) {
    connection.query(sqlString, (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return null;
      }

      res.json(rows);
      return;
    });
  } else {
    where += ' WHERE ';
    console.log(Object.keys(query).length);
    for (let i = 0; i < Object.keys(query).length; i++) {
      console.log('YO');
      let queryElement = Object.keys(query)[i];
      console.log(Object.values(query)[i]);
      if (queryElement === 'category') {
        where += `cate_descrip LIKE '${Object.values(query)[i]}'`;
      } else if (queryElement === 'publisher') {
        where += `pub_name LIKE '${Object.values(query)[i].split(' ').join('')}'`;
      } else if (queryElement === 'plt') {
        where += `book_price < '${parseInt(Object.values(query)[i])}'`;
      } else if (queryElement === 'pgt') {
        where += `book_price > '${parseInt(Object.values(query)[i])}'`;
      }

      if (i !== Object.keys(query).length - 1) {
        where += ' AND ';
      } else {
        where += ';';
      }
    }
    connection.query(sqlString + where, (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return null;
      }

      res.json(rows);
    });
  }
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error', err.message);
  process.setMaxListeners(1);
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
