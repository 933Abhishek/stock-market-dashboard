# 📊 Stock Market Dashboard (Real-Time Live Project)

A modern real-time stock market dashboard built using **React, Node.js, Express, and Chart.js**.  
This project simulates live stock prices with profit/loss tracking and interactive charts.

---

## 🚀 Features

- 📈 Real-time stock price updates (1 second refresh simulation)
- 📊 Interactive live chart using Chart.js
- 💰 Profit / Loss tracking system
- ⭐ Watchlist (Add / View stocks)
- 🌙 Dark Mode UI
- ⚡ Fast and responsive dashboard
- 🔄 Auto-updating stock data
- 🧠 Simple backend simulation (no API failure issues)

---

## 🛠 Tech Stack

### Frontend:
- React.js
- Chart.js
- Axios
- CSS (Inline styling / basic UI)

### Backend:
- Node.js
- Express.js
- CORS

---

## 📂 Project Structure
stock-dashboard/
│
├── backend/
│ └── server.js
│
├── frontend/
│ └── src/
│ └── App.js
│
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Project
```bash
git clone https://github.com/your-username/stock-dashboard.git
cd stock-dashboard

cd backend
npm install
node server.js

http://localhost:5000

📊 How It Works
Backend generates live simulated stock prices
Frontend fetches data every 1 second
Chart updates dynamically
Profit/Loss is calculated using:
P/L = Current Price - Buy Price

🔥 Key Highlights
No external API dependency (stable & error-free)
Real-time UI updates
Beginner-friendly architecture
Clean and scalable code
Resume-ready project

🚀 Future Improvements
Real stock API integration (Yahoo / Polygon / Finnhub)
WebSocket-based true live trading
User authentication system
Database (MongoDB) for portfolio saving
Advanced analytics dashboard

👨‍💻 Author

Abhishek Prasad

📌 Note

This project is built for learning + portfolio purposes and demonstrates real-time dashboard concepts used in trading platforms.
