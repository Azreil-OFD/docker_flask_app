const express = require('express');
const cors = require('cors');
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>A JavaScript project</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <h1>A JavaScript project</h1>
</body>
</html>`;

const app = express();

app.use(
  cors(
    {
      origin: "http://127.0.0.1:5000"
    }
  )
)

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(html);
});

app.get('/get', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.status(200).send({
    "hello":"0"
  });
});

module.exports = app;