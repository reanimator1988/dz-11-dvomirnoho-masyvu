"use strict";

function fillArray() {
    let rows = +prompt("Введіть кількість рядків: ");
    let cols = +prompt("Введіть кількість стовпців: ");
    if (isNaN(rows) || isNaN(cols)) {
        alert("Кількість рядків та стовпців має бути числом");
        return;
    }

    let arr = [];
    for (let i = 0; i < rows; i++) {
        let rowArr = [];
        for (let j = 0; j < cols; j++) {
            let value = prompt(`Введіть значення для комірки [${i}][${j}]: `);
            rowArr.push(value);
        }
        arr.push(rowArr);
    }
    return arr;
}

let myArray = fillArray();
console.log(myArray);
