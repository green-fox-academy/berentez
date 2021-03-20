const csvtojson = require('csvtojson');
const mysql = require('mysql');

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
  console.log('\u001b[36m', 'Database connection success');
  connection.query(
    `CREATE TABLE bookinfo.userdata (
    id INT NOT NULL AUTO_INCREMENT,
    prefix VARCHAR(40) NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    address VARCHAR(100) NULL,
    height FLOAT NULL,
    bitcoin_address VARCHAR(34) NULL,
    new_tablecol VARCHAR(45) NULL,
    color_preference VARCHAR(7) NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE);`,
    (err) => {
      if (err) {
        console.log('ERROR: ', err);
      }
    }
  );
});

const csv = 'users.csv';

csvtojson()
  .fromFile(csv)
  .then((source) => {
    for (let i = 0; i < source.length; i++) {
      let id = source[i]['id'],
        prefix = source[i]['prefix'],
        first_name = source[i]['first_name'],
        last_name = source[i]['last_name'],
        address = source[i]['address'],
        height = source[i]['height'],
        bitcoin_address = source[i]['bitcoin_address'],
        color_preference = source[i]['color_preference'];

      let insertStatement: string = `INSERT INTO userdata values(?, ?, ?, ?, ?, ? ,? ,?)`;

      const items: string[] = [id, prefix, first_name, last_name, address, height, bitcoin_address, color_preference];

      connection.query(insertStatement, items, (err, results, fields) => {
        if (err) {
          console.log('Unable to insert item at row ', i + 1);
          return console.log(err);
        }
      });
    }
    console.log('All items stored into database successfully');
  });
