const fs = require('fs');

function countStudents(file) {
  try {
    let cs = 0;
    let swe = 0;
    const csNames = [];
    const sweNames = [];

    const database = fs.readFileSync(file, 'utf-8');

    database.split(/\r?\n/).forEach((line) => {
      const databaseContent = line.split(',');
      databaseContent.forEach((data) => {
        if (data === 'CS') {
          cs += 1;
          csNames.push(databaseContent[0]);
        } else if (data === 'SWE') {
          swe += 1;
          sweNames.push(databaseContent[0]);
        } else {
          swe += 0;
        }
      });
    });

    const students = cs + swe;

    console.log(`Number of students: ${students}`);
    console.log(`Number of students in CS: ${cs}. List: ${csNames.join(', ')}`);
    console.log(`Number of students in SWE: ${swe}. List: ${sweNames.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
