const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let prices = {
  AAPL: 180,
  TSLA: 250,
  MSFT: 320
};

/* 🔴 LIVE PRICE */
app.get("/live/:symbol", (req, res) => {
  const symbol = req.params.symbol.toUpperCase();

  if (!prices[symbol]) {
    prices[symbol] = 100 + Math.random() * 200;
  }

  prices[symbol] += (Math.random() * 2 - 1);

  const price = prices[symbol];

  res.json({
    symbol,
    price: price.toFixed(2),
    change: (Math.random() * 4 - 2).toFixed(2),
    percent: (Math.random() * 2 - 1).toFixed(2)
  });
});

/* 📈 GRAPH DATA */
app.get("/chart/:symbol", (req, res) => {
  const symbol = req.params.symbol;

  const base = prices[symbol] || 150;

  const data = [
    base - 2,
    base - 1,
    base,
    base + 1,
    base + 2
  ];

  res.json({
    labels: ["1", "2", "3", "4", "5"],
    prices: data
  });
});

app.listen(5000, () => {
  console.log("🔥 Server running on 5000");
});