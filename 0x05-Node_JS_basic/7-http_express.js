const express = require('express');
const { readFile } = require('fs');

const app = express();

function countStudents(file) {
  let cs = 0;
  let swe = 0;
  const csNames = [];
  const sweNames = [];

  return new Promise((resolve, reject) => {
    readFile(file, (error, database) => {
      if (error) {
        reject(error);
      } else {
        database.toString().split(/\r?\n/).forEach((line) => {
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
        const data = {
          students: cs + swe,
          csStud: cs,
          sweStud: swe,
          csFirst: csNames,
          sweFirst: sweNames,
        };
        resolve(data);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((data) => {
    const line1 = 'This is the list of our students';
    const line2 = `Number of students: ${data.students}`;
    const line3 = `Number of students in CS: ${data.csStud}. List: ${data.csFirst.join(', ')}`;
    const line4 = `Number of students in SWE: ${data.sweStud}. List: ${data.sweFirst.join(', ')}`;
    res.send(`${line1}\n${line2}\n${line3}\n${line4}`);
  }).catch(() => res.send('This is the list of our students\nCannot load the database'));
});

app.listen(1245, () => console.log('app is running on port 1245'));
module.exports = app;
