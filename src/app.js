const express = require('express');
const cacaoTrybe = require('./data/cacaoTrybefile')
const app = express();

app.get('/chocolates', (_req, resp) => {
  resp.status(200).json(cacaoTrybe);
})

module.exports = {
  app
}