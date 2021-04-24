const express = require('express');
const app = express();

app.get('/arrow', (req, res) => {
  const { distance } = req.query;
  let { time } = req.query;
  let result = {};

  if (distance === undefined || time === undefined) {
    res.status(500).json({
      error: 'Not enough parameteres to calculate speed',
    });
  } else if (time === '0') {
    res.status(400).json({
      error: 'Cannot divide by 0',
    });
  } else {
    const speed = distance / time;
    result = { distance: distance.toString(), time: time.toString(), speed: speed.toString() };
    res.status(200).json(result);
  }
});

module.exports = app;
