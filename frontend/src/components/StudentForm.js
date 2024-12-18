import React, { useState, useEffect } from 'react';
import { addStudent, updateStudent } from '../api/studentAPI';

function StudentForm({ student, setStudents, setEditing }) {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    account: '',
    seat: '',
    grade: '',
    class: '',
    email: ''
  });

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        department: student.department,
        account: student.account,
        seat: student.seat,
        grade: student.grade,
        class: student.class,
        email: student.email
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student) {
      updateStudent(student._id, formData)
        .then(updatedStudent => {
          setStudents(prevState => prevState.map(s => s._id === updatedStudent._id ? updatedStudent : s));
          setEditing(null);
        })
        .catch(error => console.error("更新學生資料錯誤:", error));
    } else {
      addStudent(formData)
        .then(newStudent => {
          setStudents(prevState => [...prevState, newStudent]);
        })
        .catch(error => console.error("新增學生資料錯誤:", error));
    }

    setFormData({
      name: '',
      department: '',
      account: '',
      seat: '',
      grade: '',
      class: '',
      email: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="姓名" value={formData.name} onChange={handleChange} required />
      <input type="text" name="department" placeholder="院系" value={formData.department} onChange={handleChange} required />
      <input type="text" name="account" placeholder="帳號" value={formData.account} onChange={handleChange} required />
      <input type="text" name="seat" placeholder="座號" value={formData.seat} onChange={handleChange} required />
      <input type="text" name="grade" placeholder="年級" value={formData.grade} onChange={handleChange} required />
      <input type="text" name="class" placeholder="班級" value={formData.class} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">{student ? '更新資料' : '新增學生'}</button>
    </form>
  );
}

export default StudentForm;
