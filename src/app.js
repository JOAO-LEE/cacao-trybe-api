const express = require('express');
const { getAllChocolates } = require('./cacaoTrybe');

// const cacaoTrybe = require('./data/cacaoTrybefile');

const app = express();

app.get('/chocolates', async (_req, resp) => {
  const allChocolates = await getAllChocolates()
  resp.status(200).json({ allChocolates });
});

// app.get('/chocolates/:id', (req, resp) => {
//   const { id } = req.params;
//   const convertionToObject = JSON.parse(cacaoTrybe);
//   const { chocolates } = convertionToObject;
//   chocolates.find((chocolate) => chocolate.id === Number(id))
//   resp.status(200).json({ chocolates });
// });

module.exports = {
  app
};