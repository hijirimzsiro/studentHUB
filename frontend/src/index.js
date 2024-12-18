import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 引入主應用元件
import './index.css'; // (可選) 引入全域樣式檔案

// 將 App 元件渲染到根節點中
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // 對應 public/index.html 中的 <div id="root"></div>
);
