//Zadanie 1
//  const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
//  const compareByAge = (person1, person2) => person1.age - person2.age;
//  people.sort(compareByAge);
//  console.log(people);

//Zadanie 2
// function isPositive(value) {
//     return value > 0;
//  };
//  function isMale(people) {
//     return people.gender === 'male';
//  };
//  function filter(arr, ruleFunction) {
//     const filteredArray = [];
//     for (const item of arr) {
//         if (ruleFunction(item)) {
//             filteredArray.push(item);
//         }
//     }
//     return filteredArray;
//  };
//  console.log(filter([3, -4, 1, 9], isPositive));
//  const people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
//  ];
//  console.log(filter(people, isMale));

//Zadanie 3
// let count = 0;
// const interval = setInterval(() => {
//    if (count < 10) {
//        const currentDate = new Date();
//        console.log(currentDate);
//        count++;
//    } else {
//        clearInterval(interval);
//        console.log('30 секунд прошло');
//    }
// }, 3000);

//Zadanie 4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
//  };
//  delayForSecond(function () {
//     console.log('Привет, Глеб!');
//  });

//Zadanie 5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) { cb(); }
//     }, 1000)
// };
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// };
// delayForSecond(() => sayHi('Глеб'));

