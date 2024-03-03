// Виконайте сортування масиву цін за спаданням та зростанням.
// const prices = [1000, 240, 670, 360, 89, 20];
// const sortArrUp = prices.toSorted((a, b) => a - b);
// const sortArrDw = prices.toSorted((a, b) => b - a);

// console.log(sortArrUp);
// console.log(sortArrDw);

// --------
// Перевірити чи всі студенти старші 18 років.

// const students = [
//   { name: 'Alex', age: 23 },
//   { name: 'Stas', age: 18 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },
// ];
// const ageStudents = students.every(student => student.age > 18);
// console.log(ageStudents);

// ------------------------------------------------------------------------

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub'],
//   },
// ];
// const allTopics = courses
//   .flatMap(cours => cours.topics)
//   .filter((cours, index, arrey) => arrey.indexOf(cours) === index);
// console.log(allTopics);

// --------------------------------------------------------------------------------
// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

// const friends = [
//   { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//   { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//   { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//   { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//   { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//   { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
// ];
// const getGirlsPassports = friends => {
//   return friends.filter(friend => friend.sex === 'f').map(friend => friend.passport);
// };
// console.log(getGirlsPassports(friends));

// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.
// const getTotalBoysYears = friends => {
//   return friends.filter(friend => friend.sex === 'm').reduce((acc, friend) => acc + friend.age, 0);
// };
// console.log(getTotalBoysYears(friends));
// -----------------------------------------------------------------------------
// Завдання:
// 1. Перевірте, чи всі замовлення виконані.
// 2. Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];
// const ordersOk = orders.every(order => order.status === 'completed');
// const productIsStatusOk = orders
//   .filter(order => order.status === 'completed')
//   .flatMap(order => order.products);

// console.log(productIsStatusOk(orders));

// -------------------------------------------------------------------------
// Порахуй загальну кількість лайків в категорії  Fashion

// const posts = [
//   { title: 'Post 1', likes: 20, category: 'Tech' },
//   { title: 'Post 2', likes: 45, category: 'Fashion' },
//   { title: 'Post 3', likes: 12, category: 'Tech' },
//   { title: 'Post 4', likes: 30, category: 'Fitness' },
//   { title: 'Post 5', likes: 15, category: 'Fashion' },
//   { title: 'Post 6', likes: 50, category: 'Tech' },
// ];
// const allLikes = posts => {
//   return posts
//     .filter(post => post.category === 'Fashion')
//     .map(post => post.likes)
//     .reduce((sum, likes) => sum + likes, 0);
// };
// console.log(allLikes(posts));

// ----------------------------------------------------------------
// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// const obj = { num: 2 };

// function add(a, b) {
//   return this.num + a + b;
// }
// add.call(obj, 3, 8);
// // console.log(add.call(obj, 3, 8));
// add.apply(obj, [3, 7]);
// // console.log(add.apply(obj, [3, 7]));
// const fun = add.bind(obj, 7, 8);
// console.log(fun());

// 1. Створіть об'єкт car з трьома властивостями
// carBrand: "Audi Q3"
// price: 23000
// метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
// callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"

// const car = {
//   carBrand: 'Audi Q3',
//   price: 23000,

//   getData() {
//     return `${this.carBrand} за ${this.price}`;
//   },
// };
// function makeMessage(callback) {
//   console.log(`Ви замовили ${callback()}`);
// }
// makeMessage(car.getData.bind(car));

// ----------------------------------------------------
// /Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }
// const rectangle = new Rectangle(10, 5);
// console.log(rectangle.calculateArea());

// -------------------------------------------------------------------

//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const user1 = new Client('dima', 'ddd@gmail.com');
// console.log(user1);
// console.log(user1.login);
// console.log(user1.email);
// // change
// user1.login = 'TTTT';
// console.log(user1.login);
// user1.email = 'ttt@gmail.com';
// console.log(user1.email);

// ---------------------------------------------------------------------
// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`

//

// ----------------------------------------------------------------------
//
