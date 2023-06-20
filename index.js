"use strict";

function fillArray() {
    const rows = +prompt("Введіть кількість рядків: ");
    const cols = +prompt("Введіть кількість стовпців: ");
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Кількість рядків та стовпців має бути цілим позитивним числом");
        return;
    } 

    const arr = [];
    for (let i = 0; i < rows; i++) {
        const rowArr = [];
        for (let j = 0; j < cols; j++) {
            const value = prompt(`Введіть значення для комірки [${i}][${j}]: `);
            rowArr.push(value);
        }
        arr.push(rowArr);
    }
    return arr;
}
const myArray = fillArray();
console.log(myArray);
