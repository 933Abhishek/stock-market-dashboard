import { useEffect, useState } from "react";
import axios from "axios";
const API = "https://stock-market-dashboard-4krz.onrender.com";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function App() {
  const [symbol, setSymbol] = useState("AAPL");
  const [live, setLive] = useState(null);
  const [chart, setChart] = useState(null);

  const watchlist = [
    { symbol: "AAPL", buy: 170 },
    { symbol: "TSLA", buy: 240 },
    { symbol: "MSFT", buy: 310 }
  ];

  /* 🔴 LIVE UPDATE */
  useEffect(() => {
    const interval = setInterval(() => {
      getLive();
      getChart();
    }, 1000);

    return () => clearInterval(interval);
  }, [symbol]);

  const getLive = async () => {
    const res = await axios.get(
      `${API}/live/${symbol}`
    );
    setLive(res.data);
  };

  const getChart = async () => {
    const res = await axios.get(
      `${API}/chart/${symbol}`
    );

    setChart({
      labels: res.data.labels,
      datasets: [
        {
          label: symbol,
          data: res.data.prices,
          borderColor: "#00ffcc",
          tension: 0.4,
          pointRadius: 3
        }
      ]
    });
  };

  const calcPL = (buy, current) => {
    return (current - buy).toFixed(2);
  };

  return (
    <div style={{ padding: 20, background: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>

      <h1>📊 Live Stock Dashboard</h1>

      {/* INPUT */}
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        style={{ padding: 8 }}
      />

      <button onClick={getLive}>Start</button>

      {/* LIVE */}
      {live && (
        <div style={{ marginTop: 20, padding: 15, background: "#1e1e1e", borderRadius: 10 }}>
          <h2>{live.symbol}</h2>
          <p>💰 Price: {live.price}</p>
          <p>📈 Change: {live.change}</p>
          <p>📊 %: {live.percent}</p>
        </div>
      )}

      {/* GRAPH */}
      {chart && (
        <div style={{ width: 600, marginTop: 30 }}>
          <Line data={chart} />
        </div>
      )}

      {/* P/L */}
      <h2 style={{ marginTop: 30 }}>📌 Watchlist P/L</h2>

      <div style={{ display: "flex", gap: 20 }}>
        {watchlist.map((s, i) => {
          const current = live ? parseFloat(live.price) : s.buy;
          const pl = calcPL(s.buy, current);

          return (
            <div key={i} style={{ padding: 15, background: "#1e1e1e", borderRadius: 10 }}>
              <h3>{s.symbol}</h3>
              <p>Buy: {s.buy}</p>
              <p>Current: {current}</p>
              <p style={{ color: pl >= 0 ? "lime" : "red" }}>
                P/L: {pl}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
}