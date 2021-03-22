const fs = require('fs');
const mysql = require('mysql');
const { isReturnStatement } = require('typescript');

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

function readData() {
  const data = fs.readFileSync('./users.csv', 'utf8', (err, data) => {
    if (err) throw err;
  });
  return data;
}

function rawDataMaker(text) {
  const splittedData = text.split(/\r|\n/);
  splittedData.splice(0, 1);
  const data = [];
  for (let i = 0; i < splittedData.length; i++) {
    if (splittedData[i] !== '') {
      data.push(splittedData[i]);
    }
  }
  return data;
}

function matrixDataMaker() {
  const rawData = rawDataMaker(readData());
  const dataMatrix = [];
  for (let i = 0; i < rawData.length; i++) {
    dataMatrix.push(rawData[i].split(','));
    if (dataMatrix[i][5] === '') {
      dataMatrix[i][5] = null;
    }
  }

  return dataMatrix;
}

const data = matrixDataMaker();

console.log(data);

connection.query('INSERT INTO userdata VALUES ? ', [data], (err, result) => {
  if (err) {
    console.log('Importing failed: ' + err);
    return;
  }
});
