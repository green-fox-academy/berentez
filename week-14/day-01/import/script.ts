export {};
const fs = require('fs');
const mysql = require('mysql');

const csv = 'users.csv';

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
  console.log('Database connection success');
});

function readData(): string {
  const data: string = fs.readFileSync('./users.csv', 'utf8', (err, data) => {
    if (err) throw err;
  });
  return data;
}

function splitData(text) {
  const splittedData = text.split(/\r\n|\r|\n|\,/);
  return splittedData;
}

function dataManipulation() {
  const data = readData();

  return splitData(data);
}

// connection.query(
//   'INSERT INTO userdata (id, prefix, first_name, last_name, address, height, bitcoin_address, color_preference) VALUES ',
//   dataManipulation(),
//   (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     result.json();
//   }
// );
