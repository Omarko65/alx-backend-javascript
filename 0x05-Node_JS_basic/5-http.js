const { readFile } = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((data) => {
      res.write(`Number of students: ${data.students}\n`);
      res.write(`Number of students in CS: ${data.csStud}. List: ${data.csFirst.join(', ')}`);
      res.write('\n');
      res.write(`Number of students in SWE: ${data.sweStud}. List: ${data.sweFirst.join(', ')}`);
      res.end();
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
