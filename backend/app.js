const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // 載入 .env 變數

const studentRoutes = require('./routes/students');  // 路由設定

const app = express();

// 中介軟體設定
app.use(cors());
app.use(express.json());

// 使用 .env 變數建立 MongoDB 連線
const mongoURI = `mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// 路由設定
app.use('/students', studentRoutes);  // 引入學生相關的路由

// 啟動伺服器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
