
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { 
  firstName: 'Mark',
  lastName: 'Toju',
  age: 21,
  location: 'Nigeria'
}

const student2: Student = {
  firstName: 'Samuel',
  lastName: 'Laju',
  age: 25,
  location: 'Nigeria'
}

const studentList: Student[] = [student1, student2];

function generateTable(studentList: any[]) {
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  const row1 = document.createElement("tr");
  for (let k = 0; k < 2; k++) {
    let cellText1 = document.createTextNode('Id');
    if (k === 0) {
      cellText1 = document.createTextNode('FirstName');
    } else if (k === 1) {
      cellText1 = document.createTextNode('Location');
    }
    
    const cell1 = document.createElement("td");
    cell1.appendChild(cellText1);
    row1.appendChild(cell1);
  }
  tblBody.appendChild(row1);

  for (let i = 0; i < studentList.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      let cellText = document.createTextNode(`${i+1}`);

      if (j === 0) {
        cellText = document.createTextNode(`${studentList[i].firstName}`);
      } else if (j === 1) {
        cellText = document.createTextNode(`${studentList[i].location}`);
      }
      const cell = document.createElement("td");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
}

generateTable(studentList);

