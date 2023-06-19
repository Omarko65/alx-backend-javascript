const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    res.statusCode = 200;
    if (process.argv[2]) {
      readDatabase(process.argv[2].toString()).then((data) => {
        const line1 = 'This is the list of our students';
        const line2 = `Number of students: ${data.students}`;
        const line3 = `Number of students in CS: ${data.csStud}. List: ${data.csFirst.join(', ')}`;
        const line4 = `Number of students in SWE: ${data.sweStud}. List: ${data.sweFirst.join(', ')}`;
        res.status(200).send(`${line1}\n${line2}\n${line3}\n${line4}`);
      }).catch(() => res.status(500).send('Cannot load the database'));
    } else {
      res.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    if (field === 'CS' || field === 'SWE') {
      if (process.argv[2]) {
        readDatabase(process.argv[2].toString()).then((data) => {
          if (field === 'CS') {
            const firstList = data.csFirst;
            res.status(200).send(`List: ${firstList.join(', ')}`);
          } else {
            const firstList = data.sweFirst;
            res.status(200).send(`List: ${firstList.join(', ')}`);
          }
        }).catch(() => res.status(500).send('Cannot load the database'));
      } else {
        res.status(500).send('Cannot load the database');
      }
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
