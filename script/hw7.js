//Задание 1
// const originalString = "js";
// const upperCaseString = originalString.toUpperCase();

// console.log(upperCaseString);

//Задание 2
// function searchStart(array, searchString) {
//   const lowerCaseSearch = searchString.toLowerCase();
//   return array.filter(item => item.toLowerCase().startsWith(lowerCaseSearch));
// };

// const result1 = searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
// console.log(result1); 
// const result2 = searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
// console.log(result2); 

// const result3 = searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');
// console.log(result3);

//Задание 3
// const number = 32.58884;
// const roundedDown = Math.floor(number); // Округление до меньшего целого
// const roundedUp = Math.ceil(number); // Округление до большего целого
// const roundedNearest = Math.round(number); // Округление до ближайшего целого

// console.log(roundedDown); // 32
// console.log(roundedUp);   // 33
// console.log(roundedNearest); // 33


//Задание 4
// const numbers = [52, 53, 49, 77, 21, 32];
// const minNumber = Math.min(...numbers);
// const maxNumber = Math.max(...numbers);

// console.log("Наименьшее число:", minNumber);
// console.log("Наибольшее число:", maxNumber);


//Задание 5
// function printRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNumber);
// };

// printRandomNumber();


//Задание 6
// function getRandomArrNumbers(number) {
//   const length = Math.floor(number / 2);
//   const randomNumbers = [];

//   for (let i = 0; i < length; i++) {
//     const randomNumber = Math.floor(Math.random() * (number + 1));
//     randomNumbers.push(randomNumber);
//   };
//   return randomNumbers;
// };

// console.log(getRandomArrNumbers(7));   //[3, 6, 5]
// console.log(getRandomArrNumbers(12));  //[9, 4, 10, 3, 5, 11]



//Задание 7
// function getRandomNumberInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const result = getRandomNumberInRange(5, 15); 
// console.log(result);

//Задание 8
// const currentDate = new Date();
// console.log(currentDate);


// Задание 9
// const currentDate = new Date();
// const futureDate = new Date(currentDate);
// futureDate.setDate(currentDate.getDate() + 73);

// console.log("Текущая дата:", currentDate.toDateString());
// console.log("Дата через 73 дня:", futureDate.toDateString());


// Задание 10
// function formatDateTime(date) {
//   const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
//   const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

//   const dayOfWeek = daysOfWeek[date.getDay()];
//   const day = date.getDate();
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();

//   const formattedDate = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.`;
//   const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

//   return `${formattedDate}\n${formattedTime}`
// };

// const currentDate = new Date();
// const formattedDateTime = formatDateTime(currentDate);
// console.log(formattedDateTime);
