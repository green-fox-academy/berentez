const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());

// app.post()

app.listen(PORT, () => {
  console.log(`App listens on http://localhost:${PORT}`)
});