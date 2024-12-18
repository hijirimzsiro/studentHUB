const Student = require('../models/student'); // 引入學生資料模型

// 取得所有學生資料 (Read)
exports.getAllStudents = (req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json({ message: 'Error fetching students', error: err }));
};

// 取得單一學生資料 (Read)
exports.getStudentById = (req, res) => {
  const studentId = req.params.id;
  Student.findById(studentId)
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json(student);
    })
    .catch(err => res.status(400).json({ message: 'Error fetching student', error: err }));
};

// 新增學生資料 (Create)
exports.createStudent = (req, res) => {
  const { account, seat, name, department, grade, class: className, email } = req.body;

  const newStudent = new Student({
    account,
    seat,
    name,
    department,
    grade,
    class: className,
    email
  });

  newStudent.save()
    .then(student => res.status(201).json(student))
    .catch(err => res.status(400).json({ message: 'Error creating student', error: err }));
};

// 更新學生資料 (Update)
exports.updateStudent = (req, res) => {
  const studentId = req.params.id;
  const { account, seat, name, department, grade, class: className, email } = req.body;

  Student.findByIdAndUpdate(studentId, {
    account,
    seat,
    name,
    department,
    grade,
    class: className,
    email
  }, { new: true })
    .then(updatedStudent => {
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json(updatedStudent);
    })
    .catch(err => res.status(400).json({ message: 'Error updating student', error: err }));
};

// 刪除學生資料 (Delete)
exports.deleteStudent = (req, res) => {
  const studentId = req.params.id;

  Student.findByIdAndDelete(studentId)
    .then(deletedStudent => {
      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: 'Student deleted successfully' });
    })
    .catch(err => res.status(400).json({ message: 'Error deleting student', error: err }));
};
