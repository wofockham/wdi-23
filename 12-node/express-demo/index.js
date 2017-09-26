const express = require('express');
const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
  res.end('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
