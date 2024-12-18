import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';

function App() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);

  // 取得學生資料
  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error("There was an error fetching the students!", error));
  }, []);

  // 編輯學生資料
  const handleEdit = (student) => {
    setEditing(student);
  };

  // 刪除學生資料
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => setStudents(students.filter(student => student._id !== id)))
      .catch(error => console.error("There was an error deleting the student!", error));
  };

  return (
    <div className="App">
      <h1>學生管理系統</h1>
      {/* 傳遞編輯的學生資料和更新學生列表的函數給 StudentForm */}
      <StudentForm student={editing} setStudents={setStudents} setEditing={setEditing} />
      <h2>學生名單</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - {student.department}
            <button onClick={() => handleEdit(student)}>編輯</button>
            <button onClick={() => handleDelete(student._id)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
