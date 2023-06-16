const fs = require('fs');


function countStudents(file) {
  try {
    let cs = 0;
    let swe = 0;
    const cs_names = [];
    const swe_names = [];

    const database = fs.readFileSync(file, 'utf-8');

    database.split(/\r?\n/).forEach(line => {
    databaseContent = line.split(',');
      databaseContent.forEach((data) => {
        if ('CS' === data) {
          cs = cs + 1;
          cs_names.push(databaseContent[0]);
        } else if ('SWE' === data) {
          swe = swe + 1;
          swe_names.push(databaseContent[0]);
        } else {
          swe = swe + 0;
        }
      });
    });
  
    const students = cs + swe;
  
    console.log('Number of students: ' + students);
    console.log(`Number of students in CS: ${cs}. List: ${cs_names.join(', ')}`);
    console.log(`Number of students in SWE: ${swe}. List: ${swe_names.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
