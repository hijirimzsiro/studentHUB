const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// 新增學生資料 (Create)
router.post('/', studentController.createStudent);

// 取得所有學生資料 (Read)
router.get('/', studentController.getAllStudents);

// 更新學生資料 (Update)
router.put('/:id', studentController.updateStudent);

// 刪除學生資料 (Delete)
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
