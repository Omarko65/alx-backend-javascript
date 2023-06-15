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
    let i = 0;
    let lent = cs_names.length;

    console.log('Number of students: ' + students);
    process.stdout.write(`Number of students in CS: ${cs}. List: `);

    cs_names.forEach((name) => {
      i = i + 1;
      process.stdout.write(name);
      if ( i != lent) {
        process.stdout.write(', ');
      }
    });

    process.stdout.write('\n');
    lent = swe_names.length;
    i = 0;

    process.stdout.write(`Number of students in SWE: ${swe}. List: `);
    swe_names.forEach((name) => {
      i = i + 1;
      process.stdout.write(name);
      if ( i != lent) {
        process.stdout.write(', ');
      }
    });

    process.stdout.write('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
