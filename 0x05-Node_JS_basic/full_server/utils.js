const { readFile } = require('fs');

function readDatabase(file) {
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

module.exports = readDatabase;
