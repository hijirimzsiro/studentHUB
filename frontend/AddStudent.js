// src/AddStudent.js
import React, { useState } from 'react';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const studentData = {
      姓名: name,
      院系: department,
    };

    // 使用 fetch 發送 POST 請求
    fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // 告訴伺服器資料格式是 JSON
      },
      body: JSON.stringify(studentData),  // 將 JavaScript 物件轉換為 JSON 字串
    })
      .then((response) => response.json())  // 解析伺服器回傳的 JSON
      .then((data) => {
        alert('學生已新增');
        console.log(data);  // 顯示新增資料的回應
      })
      .catch((error) => {
        console.error('Error adding student:', error);
      });
  };

  return (
    <div>
      <h2>新增學生</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="院系"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default AddStudent;
