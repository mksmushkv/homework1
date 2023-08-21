//Zadabie 1
// const number = [1, 5, 4, 10, 0, 3];
// for (const element of number) {
//   if (element === 10) {
//     break;
//   }
//   console.log(element);
// };

//Zadanie 2
// const number = [1, 5, 4, 10, 0, 3];
// const numberToFind = 4;
// const index = number.indexOf(numberToFind);
// if (index !== -1) {
//   console.log(`Число ${numberToFind} найдено на позиции ${index}.`);
// } else {
//   console.log(`Число ${numberToFind} не найдено в массиве.`);
// };

//Zadanie 3
// const number = [1, 3, 5, 10, 20];
// const result = number.join (' ');
// console.log(result);

//Zadanie 4
// const rowsNumber = 3;
// const collumnsnumber = 3;
// const value = 1;
// const multidimensionalarray = [];
// for (let i = 0; i < rowsNumber; i++) {
//     const row = [];
//     for (let k = 0; k < collumnsnumber; k++) {
//         row.push(value);
//     };
//     multidimensionalarray.push(row);
// };
// console.log(multidimensionalarray);

//Zadanie 5
// const array = [1, 1, 1];
// array.push(2, 2, 2);
// console.log(array);

//Zadanie 6
// const array = [9, 8, 7, 'a', 6, 5];
// array.sort();
// for (let i = array.length - 1; i >= 0; i--) {
//   if (typeof array[i] === 'string') {
//     array.splice(i, 1);
//   }
// }
// console.log(array);

//Zadanie 7 
// const array = [9, 8, 7, 6, 5];
// const userInput = prompt('Угадайте число:');
// const userNumber = parseInt(userInput);
// if (array.includes(userNumber)) {
//   alert('Угадал');
// } else {
//   alert('Не угадал');
// };

//Zadanie 8
// const line = 'abcdef';
// const reversedline = line.split('').reverse().join('');
// console.log(reversedline);

//Задание 9
// const array = [[1, 2, 3], [4, 5, 6]];
// const flatArray = array.flat();
// console.log(flatArray);

//Zadanie 10 
// const array = [5, 2, 3, 7, 9, 1, 8, 10, 4, 6];
// for (let i = 0; i < array.length - 1; i++) {
//   const currentElement = array[i];
//   const nextElement = array[i + 1];
//   const sum = currentElement + nextElement;
//   console.log(`Сумма ${currentElement} и ${nextElement} равна ${sum}`);
// };

//Zadanie 11
// function squareArray (inputarray) {
//     const arrayElements = inputarray.map(number => number * number);
//     return arrayElements;
// };
// const inputarray = [2, 4, 6, 8, 10];
// const arrayElements = squareArray(inputarray);
// console.log(arrayElements);

//Zadanie 12
// function getLengthWords(inputArray) {
//     const lengthsArray = inputArray.map(word => word.length);
//     return lengthsArray;
//   };
//   const inputArray = ['слово', '', 'слог', 'длинное предложение', 'буква'];
//   const lengthsArray = getLengthWords(inputArray);
//   console.log(lengthsArray); // возможно ошибся так как не совсем понял задание

//Задание 13
// function filterPositive(array) {
//     const negativeArray = array.filter(number => number < 0);
//     return negativeArray;
//   };
//   const result1 = filterPositive([-1, 0, 5, -10, 56]);
//   console.log(result1); 
//   const result2 = filterPositive([-25, 25, 0, -1000, -2]);
//   console.log(result2); 
  