import axios from 'axios';

// 取得所有學生資料
export const getStudents = async () => {
  try {
    const response = await axios.get('http://localhost:5000/students');
    return response.data;
  } catch (error) {
    throw new Error('取得學生資料錯誤');
  }
};

// 新增學生
export const addStudent = async (studentData) => {
  try {
    const response = await axios.post('http://localhost:5000/students', studentData);
    return response.data;
  } catch (error) {
    throw new Error('新增學生資料錯誤');
  }
};

// 更新學生資料
export const updateStudent = async (id, studentData) => {
  try {
    const response = await axios.put(`http://localhost:5000/students/${id}`, studentData);
    return response.data;
  } catch (error) {
    throw new Error('更新學生資料錯誤');
  }
};

// 刪除學生
export const deleteStudent = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/students/${id}`);
  } catch (error) {
    throw new Error('刪除學生資料錯誤');
  }
};
