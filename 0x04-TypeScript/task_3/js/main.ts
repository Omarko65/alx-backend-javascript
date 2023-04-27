/// <reference path="./crud.d.ts" />

import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";

const obj: RowElement = {firstName: 'Guilaume', lastName: 'Salva'};

const newRowID: RowID = CRUD.insertRow(obj);
const updateRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23};

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
