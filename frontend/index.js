import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // 全域樣式檔案
import App from './App'; // 引入主應用程式
import reportWebVitals from './reportWebVitals';

// 將 React 應用渲染到 HTML 中的根元素
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 測量應用效能的功能（可選）
reportWebVitals();
