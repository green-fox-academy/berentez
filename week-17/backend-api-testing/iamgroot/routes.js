const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  const queryParams = req.query;
  const message = queryParams.message;
  let result = {};
  if (queryParams === undefined) {
    result = { error: 'I am Groot!' };
    res.status(400);
  } else if (message === undefined) {
    result = { error: 'I am Groot!' };
    res.status(400);
  } else {
    result = { received: `${message}`, translated: 'I am Groot!' };
    res.status(200);
  }

  res.end(JSON.stringify(result));
});

module.exports = app;
