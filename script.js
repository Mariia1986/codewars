// Задание 3
// const userPassword = prompt('Введите пароль');

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message ;

// if (userPassword === ADMIN_PASSWORD){
//     message = ACCESS_IS_ALLOWED
//    } else if(userPassword === null){
//       message = CANCELED_BY_USER
//    } else {message = ACCESS_DENIED};
//     console.log(message);
// задание 4
// let orderPieces = prompt('Введите количество дроидов');
// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice; // Write code on this line
// let balanceCredit; // Write code on this line
// let message;
// if (orderPieces === null){
//     message = CANCELED_BY_USER
//  };
//  console.log(message);
// if(credits >= pricePerDroid*orderPieces && orderPieces !== null && orderPieces >= 0){
//     totalPrice = orderPieces*pricePerDroid;
//     balanceCredit =credits - totalPrice;
//     message=`Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
// } else if (credits <= pricePerDroid*orderPieces) {
//     message=ACCESS_DENIED
// }
// console.log(message);

// const countryName = prompt('Введите название страны');

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//    switch (country) {
//     case 'Китай':
//     price = 100;

//            break;
//      case 'Австралия':
//         price = 170;

//         break;
//         case 'Индия':
//             price = 80;

//             break;
//             case 'Ямайка':
//             price = 120;

//             break;
//             default:
//       message = (NO_DELIVERY);
//     }
// }
// if (price > 0){ // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//  pricePerWord = message.split(' ').length * pricePerWord;
// console.log(calculateEngravingPrice("gfg gfgdgd gfdgd cvbcb xfxgv", 10));

//  задача 2-7
// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {

//     if (Number.isFinite(array[i]) === true) {
//      numbers.push(array[i]);
//     }

//   }
//   return numbers;
// }
// console.log(filterArray([2, 4, NaN, 'gsgdsg', 'Вова', 'Тетя маша', 17, 20, 5, 8, 10]))

//  задача 2-8

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1){

//     if (array === undefined){
//       total = 0;
//     } else {total += array[i];}
//   }

//   return total;
// };
// console.log(reduceArray([0, 2]))
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, undefined
// задача 3-1
// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// user.mood = 'happy';
// user.fulltime = 'true';
// user.hobby ='skydiving';
// user.premium = 'false';
// console.log(user);
// const keys = Object.keys(user);
// for (const key of keys) {
//  message +=`${key}: ${user[key]}\n`};
//  console.log(message);

// задача 3-2
//

// задача 3-3
// const findBestEmployee = function (employees) {
//   'use strict';
//   let result = '';
//   let bestEmploee = 0;
//   for (const emploee in employees){
//     if (employees[emploee] >= bestEmploee){
//       bestEmploee = employees[emploee];
//       result = emploee;

//     }

//   }
//   return  result;

// };

// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
//   ВоваБабенко: 88,
//   МашаРандаревич: 99,
// };

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// }

// console.log(findBestEmployee(supports));

// задача 3-4
// const countTotalSalary = function(employees) {
//   'use strict';
//   let total = 0;
//   for (let emploee in employees){
//   total +=employees[emploee];
//   }
//   return total;
// };

// const developers = {
//     mango: 300,
//     poly: 250,
//     alfred: 450,
// };
// console.log(countTotalSalary(developers))

// задача 3-5

// function getAllPropValues (array, prop) {
//   'use strict';
//   const result = [];
//   for (let object of array){
//     for (let key in object){
//       if (key === prop){
//         result.push(object[key]);
//       }
//     }
//   }
//   return result;
// };

// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];
//  console.log(getAllPropValues(products, 'name'))

// задача 3-6

// function calculateTotalPrice (array, prop) {
//   'use strict';
//   let result = 0;

//   for (let object of array){
//           if (prop === object.name){
//           result += object.price * object.quantity;

//           } }
//   return result;
// }

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 }
// ];
// console.log(calculateTotalPrice(products,'Захват'))
// задача 4-1

// const addIndex = (element, index) => element + index;
// // Write code under this line
// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//   'use strict';
// // Write code under this line
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//      numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5];
// console.log(mapArray(arr, 2)
// задача 4-2
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     if (cb(element, index, array)) {
//       numbers.push(element);
//     }

//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5,1,2,5];
// console.log(filterArray(arr, isEven));

// задача 4-3
// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if(arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if(arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for(i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum,element);
//   }
//   return accum;
// }

// const arr  = [1,2,3,4,5];
// console.log(reduceArray(arr, mult));
// // задача 4-4
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value; // Write code in this line
//   },
//   showOrders() {
//     return this.orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount =  Object.assign({},account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// /*
// account.changeDiscount(0.15);
// //console.log(account.discount); // 0.15

// //console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// //console.log(account.balance); // 19000

// //console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3', 'order-4']

// задача 4-5
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   const act =  action(itemName);
//   const msg =  `Invoking action on ${itemName}`;
//   return {act, msg};
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//   inventory.add.bind(inventory)  // Write code in this line
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']
// */

// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory)   // Write code in this line
// );

// const arrayRemove = [...inventory.items];
// Задача из codewar №1
// function spinWords(string){
//     let reverseWord = '';
//     let result = [];
//     let newString = '';
//     const array = string.split(' ');
//     for (i = 0; i <array.length; i += 1) {
//       if (array[i].length >= 5){
//       reverseWord = array[i].split('').reverse();

//       result.push(reverseWord.join(''));} else { result.push(array[i])}
//       newString = result.join(' ');

//     }
//    return newString ;
// }
// console.log(spinWords('Сколько будет два плюс два'))

// Задача из codewar №2

// function rowSumOddNumbers(n) {
// return n*n*n}

//
//
// const data = { // YOU HAVE DATA WITH PRICES FOR PRODUCTS PER YEAR
//     2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
//     2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//     2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
//   };

//   const yearData = { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 } // temporarily yearData

//   const parseBasket = (basket) => {
//     const goods = basket.split(", ");
//     const result = {};

//     for (const good of goods) {
//       const [count, name] = good.split(" ");

//       result[name] = Number(count);
//     }

//     return result;
//   };

//   const basket = parseBasket(stringBasket);

//   const countYearBasket = (basket, year) => {
//     const basketEntries = Object.entries(basket);
//     let sum = 0;

//     for (const basketEntry of basketEntries) {
//       const [name, count] = basketEntry;
//       const priceFromYear = year[name];

//       sum += priceFromYear * count;
//     }

//     return sum;
//   };

//   console.log(countYearBasket(basket, yearData));

//   const getBasketPerYears = (basket, data) => {

// Задача из codewar №3
//  function narcissistic(value) {

//      const array = Array.from(String(value), Number);
//     result = 0
// let answer = false;

//      for (let a of array){
//         let number = Number(a);
//         result+= Math.pow(number, array.length);
//      }
//      if (result === Number(value)){
//         answer = true;
//      }

//       return  answer

//    }
//    console.log(narcissistic(154))
// задача 5-1
//    const Account =function(login,email){
//     this.login = login;
//     this.email = email;}
//   Account.prototype.getInfo =function(){
//     return `"login:${this.login}, email:${this.email}"`}

//     const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// const luda= new Account( 'gdgog', 'mgfgfgo@dog.woof');
// console.log(luda.getInfo());

// задача 5-2
// class User {
//    constructor(name, age, flowers){
//      this.name = name;
//      this.age = age;
//      this.flowers = flowers;
//    }
//     getInfo() {
//      return `User ${this.name} is ${this.age} years old and has ${this.flowers}`;
//    }
//  }

//  const mango = new User('Mango', 2, 20);
//  console.log(mango.getInfo());
//  const poly = new User( 'Poly', 5, 17);
//  console.log(poly.getInfo());

//  задача 5-5
// class Car {

//   static getSpecs(car){

//     return `maxSpeed:${car.maxSpeed}, speed:${car.speed}, isOn:${car.isOn}, distance:${car.distance}, price:${car._price}`
//   }
//    constructor(obj){
//     this.maxSpeed = obj.maxSpeed;
//     this.speed = 0;
//     this.isOn = false;
//     this.distance = 0;
//     this._price = obj.price;
//    }
//    get price() {
//     return this._price
//    }
//    set price(value) {
//     this._price = value;
//    }
//    turnOn() {
//      return this.isOn = true;
//    }
//    turnOff() {
//      if(this.isOn = true){
//       this.isOn = false;
//       this.speed = 0;
//      }
//      return this.isOn
//    }
//    accelerate(value) {if(this.speed + value < this.maxSpeed){
//     this.speed +=value
//    } else{this.speed = this.maxSpeed}
//    return this.speed}
//    decelerate(value) {if(this.speed-value < 0){
//     this.speed=0} else{
//     this.speed-=value}
//     return this.speed};
//    drive(hours) {
//      if(this.isOn = true){
//       this.distance += hours*this.speed
//      }
//      return this.distance
//    }
//  }

//  const mustang = new Car({ maxSpeed: 200, price: 2000 });
//  mustang.turnOn();
//  mustang.accelerate(20);
//  mustang.drive(2);

//  console.log(Car.getSpecs(mustang));
// //  'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

//  mustang.decelerate(10);
//  mustang.drive(1);
// //  mustang.turnOff();

//  console.log(Car.getSpecs(mustang));
//  // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

//  console.log(mustang.price); // 2000
//  mustang.price = 4000;
//  console.log(mustang.price); // 4000

//   задача 6-1
// const users = [
//    "Moore Hensley",
//    "Sharlene Bush",
//    "Ross Vazquez",
//    "Elma Head",
//    "Carey Barr",
//    "Blackburn Dotson",
//    "ShereeAnthony",
//  ]
// const getUserNames =array => array.map((name)=>name);
// console.log(getUserNames(users));

//   задача 6-2
// const users =[
//    {
//      id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//      name: "Moore Hensley",
//      email: "moorehensley@indexia.com",
//      eyeColor: "blue",
//      friends: ["Sharron Pace"],
//      isActive: false,
//      balance: 2811,
//      skills: ["ipsum", "lorem"],
//      gender: "male",
//      age: 37,
//    },
//    {
//      id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//      name: "Sharlene Bush",
//      email: "sharlenebush@tubesys.com",
//      eyeColor: "blue",
//      friends: ["Briana Decker", "Sharron Pace"],
//      isActive: true,
//      balance: 3821,
//      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//      gender: "female",
//      age: 34,
//    },
//    {
//      id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//      name: "Carey Barr",
//      email: "careybarr@nurali.com",
//      eyeColor: "blue",
//      friends: ["Jordan Sampson", "Eddie Strong"],
//      isActive: true,
//      balance: 3951,
//      skills: ["ex", "culpa", "nostrud"],
//      gender: "male",
//      age: 27,
//    }
//  ]

// const getUsersWithEyeColor = (array, color) => array.filter( (user) => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

// const getUsersWithEyeColor = (array, color) =>  array.filter( ({eyeColor}) => eyeColor === color);
// задача 6-3

// const users = [
//   {name: "Moore Hensley", gender : 'male'},
//  { name:"Ross Vazquez",  gender : 'male'} ,
//  {  name:"Carey Barr",    gender : 'female'},
//   { name:"Blackburn Dotson" ,  gender : 'male'}
//  ] ;

// // [
// //    "Moore Hensley",
// //    "Ross Vazquez",
// //    "Carey Barr",
// //    "Blackburn Dotson"
// //  ]

//  const getUsersWithGender = (array, gender) => array.filter((user)=> user.gender === gender).map((user) => user.name);
//  console.log(getUsersWithGender(users, 'female'));
//  const getUsersWithGender = (array, gend) => array.filter(({gender}) =>  gender === gend ).map(({name}) => name);-верное

// задача 6-4

// const getInactiveUsers = array  => array.filter(({isActive})=>!isActive);

// console.log(getInactiveUsers(users));

// const users= [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   }
// ];

// задача 6-5

// Write code under this line
// const getUserWithEmail = (array, mail) => array.find(({email})=> email === mail);

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

/* {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
} */

// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */
// задача 6-9

// const users = [
//     {name: 'Moore Hensley', friends : 40},
//    { name:"Ross Vazquez",  friends : 1} ,
//    {  name:"Carey Barr",    friends :55},
//     { name:"Blackburn Dotson" , friends : 15}
//    ] ;

// const getNamesSortedByFriendsCount = (array) => [...array].sort((a,b)=>a.friends.length-b.friends.length).map(({name})=>name);

// console.log(getNamesSortedByFriendsCount(users));
// console.log(users);

// // задача 6-10

// const users= [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   }
// ];

// const getSortedUniqueSkills = (array) => array.reduce((acc, el)=> acc.concat(el.skills),[]).sort().filter((el,i,arr)=>arr[i+1] !== el);
// ;

// console.log(getSortedUniqueSkills(users));

// const solve = (arr)=>

//     arr.map( (element)=> element.map(el =>Math.abs(el))).reduce((acc, a)=>
//         acc*= Math.max(...a),1)

// console.log(solve([[-1,2,-3,4],[1,-2,3,-4]]))

// function betterThanAverage(classPoints, yourPoints) {
//     let total = 0;
//     let answer = false;
//    const sumOfel = classPoints.reduce((summ,el)=>summ+=el ,0)+yourPoints
//     total = sumOfel / (classPoints.length+1);
//     answer = total < yourPoints ? true : false
//     return answer

// }

// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

// function findLongest(str) {

//     var spl = str.split(" "),
//      longest = 0;

//     for (var i = 0; i < spl.length; i+=1) {
//       if (spl[i].length > longest) {
//         longest = spl[i].length
//       }
//       }
//       return longest

//     }

//     // function findLongest(str) {
//     //     var spl = str.split(" "),
//     //         longest = 0;

//     //     for (var i in spl) {
//     //       if (spl[i].length > longest) {
//     //         longest = spl[i].length;
//     //       }
//     //     }

//     //     return longest;
//     //   }

//     console.log(findLongest("The quick white fox jumped around the massive dog"))

// function isIsogram(str){

//     let answer = true;
//     const arr = str.toLowerCase().split('');
//     sortarr = arr.sort()

//     for (i = 0; i <sortarr.length-1; i += 1){
//         if(sortarr[i]===sortarr[i+1]){

//       answer = false; break;
//         }
//     }
//     return answer }

//   console.log(isIsogram("Dermatoglyphics"))
//   console.log(isIsogram("isogram"))
//   console.log(isIsogram(""))

// function openOrSenior(data){
//     let newArr=[]
//   data.map((el)=>el.reduce((acc,el,i, arr)=>acc=(arr[0]>=55 && arr[1]>7 )? newArr.push('Senior'): newArr.push('Open')),[]);
//   return newArr
// }

// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))

// function accum(s) {
//   let result = [];
//   let newarr=[];
//   let str='';

//  let arr = s.split('')
//   for (let i=0; i<arr.length; i+=1){
//      result.push(arr[i].repeat(i+1));

//   }
//   result.map((el) => {
//    newarr.push(el= el[0].toUpperCase()+el.slice(1).toLowerCase());
//     });
//     str = newarr.join('-')
//   return str;
// }

// console.log(accum("ZpglnRxqenU"))

// function pigIt(str){
//   let arr =[]
//   arr=str.split(' ')
//   let newStr='';
//   newStr=arr.map((el)=>(el !== '!'&& el !=='?'&& el !=='.') ? (el.substring(1)+el.substring(0,1)+'ay') : el).join(' ');

//  return newStr
// }
// console.log(pigIt('Маша ела кашу .'))

// var moveZeros = function (arr) {
//   let newArr = [];
//   let ziroArr = [];
//   let result = [];
//   newArr = arr.filter(
//     (el) =>
//       el > 0 ||
//       typeof el === "string" ||
//       typeof el === "boolean" ||
//       el === null ||
//       el.toString() === "" ||
//       typeof el === "object"
//   );
//   ziroArr = arr.filter((el) => el === 0);
//   result = [...newArr, ...ziroArr];
//   return result;
// };

// console.log(
//   moveZeros(["b", false, null, [], {}, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1])
// );
// console.log(typeof {});

// function sortArray(array) {
//   const odds = array.filter((x) => x % 2).sort((a, b) => a - b);

//   return odds.map((x) => (x % 2 ? odds.shift() : x));
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// function high(x) {
//   let arr = x.split(" ");
//   let obj = {};
//   let maxpoint;
//   let alpha = "abcdefghijklmnopqrstuvwxyz";

//   for (j = 0; j < arr.length; j += 1) {
//     const value = arr[j].split("").reduce((acc, el) => {
//       if (alpha.includes(el)) {
//         acc += alpha.indexOf(el) + 1;
//       }
//       return acc;
//     }, 0);
//     obj[arr[j]] = value;
//   }

//   maxpoint = Math.max(...Object.values(obj));
//   for (key in obj) {
//     if (obj[key] === maxpoint) {
//       return key;
//     }
//   }

//   return key;
// }
// console.log(high("man i need a taxi up to ubud"));

function dirReduc(arr){
   

  }
 console.log (dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))