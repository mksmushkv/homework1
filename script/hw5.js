//Zadanie 1
// function findSmallerNumber(num1, num2) {
//     return Math.min(num1, num2);
//   };
//   console.log(findSmallerNumber(8, 4));
//   console.log(findSmallerNumber(6, 6)); 
  
//Zadanie 2
// function checknumber(number) {
//     if (number % 2 === 0) {
//       return 'Число четное';
//     } else {
//       return 'Число нечетное';
//     }
//   };
//   console.log(checknumber(2));
//   console.log(checknumber(3));

//Zadanie 3
// function squareNumber(number) {
//     const square = number * number;
//     console.log(`Квадрат числа ${number} равен ${square}`);
//   };
//   squareNumber(2);

// function calculateSquare(number) {
//     return number * number;
//   }
//   console.log(calculateSquare(3)); 
  
//Zadanie 4
// function greetUser() {
//     const age = parseInt(prompt("Сколько вам лет?"));
//     if (age < 0) {
//       console.log("Вы ввели неправильное значение");
//     } else if (age >= 0 && age <= 12) {
//       console.log("Привет, друг!");
//     } else {
//       console.log("Добро пожаловать!");
//     }
//   };
//   greetUser();
  
//Zadanie 5
// function Numbers(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
//       return 'Одно или оба значения не являются числом';
//     } else {
//       return num1 * num2;
//     }
//   };
//   console.log(Numbers(2, 5));
//   console.log(Numbers(4, 'abcd')); 

// Zadanie 6
// function cubeNumber() {
//     const input = prompt("Введите число:");
//     const number = parseFloat(input);
//     if (!isNaN(number)) {
//       const cube = number ** 3;
//       return `${number} в кубе равняется ${cube}`;
//     } else {
//       return 'Переданный параметр не является числом';
//     }
//   };
//   for (let i = 0; i <= 10; i++) {
//     console.log(cubeNumber(i));
//   };

//Zadanie 7
// const circle1 = {
//     radius: 4,
//     getArea: function() {
//       return Math.PI * this.radius ** 2;
//     },
//     getPerimeter: function() {
//       return 2 * Math.PI * this.radius;
//     }
//   };
//   const circle2 = {
//     radius: 8,
//     getArea: function() {
//       return Math.PI * this.radius ** 2;
//     },
//     getPerimeter: function() {
//       return 2 * Math.PI * this.radius;
//     }
//   };
//   console.log("Площадь круга circle1:", circle1.getArea());
//   console.log("Периметр окружности circle1:", circle1.getPerimeter());
//   console.log("Площадь круга circle2:", circle2.getArea());
//   console.log("Периметр окружности circle2:", circle2.getPerimeter());
  
  