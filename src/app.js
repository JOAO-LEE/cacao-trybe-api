const express = require('express');
const { getAllChocolates } = require('./cacaoTrybe');

const app = express();

app.get('/chocolates', async (_req, resp) => {
  const allChocolates = await getAllChocolates()
  resp.status(200).json({ allChocolates });
});

app.get('/chocolates/:id', async (req, resp) => {
  const { id } = req.params;
  const chocolateById = await getAllChocolates();
  const chocolates = await chocolateById.find((chocolate) => chocolate.id === Number(id));
  resp.status(200).json({ chocolates });
});

app.get('/chocolates/brand/:brandId', async (req, resp) => {
  const { brandId } = req.params;
  const chocolateById = await getAllChocolates();
  const chocolates = chocolateById.filter((chocolate) => chocolate.brandId === Number(brandId));
  resp.status(200).json({ chocolates });
});

module.exports = {
  app
};

