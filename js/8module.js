/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
    {
      id: 1,
      img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
      name: "Monitor",
      price: 3000,
      description: "23-inch monitor with Full HD resolution.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
      name: "Laptop",
      price: 20000,
      description:
        "Lightweight and powerful laptop with a 15-inch display and SSD.",
    },
    {
      id: 3,
      img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
      name: "Smartphone",
      price: 8000,
      description: "Equipped with a triple camera and a multi-core processor.",
    },
    {
      id: 4,
      img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
      name: "Tablet",
      price: 12000,
      description: "10-inch tablet with high performance and a Retina display.",
    },
];
// находим продукты
const container = document.querySelector(".products");
// вставляем в контейнер розметку, которая вернет функция createMarkup
container.insertAdjacentHTML("beforeend", createMarkup(products))

// фун-я получает продукты и возвращает розметку (arr- будет возвращать массив products)
function createMarkup(arr) {
return arr
// вернет массив (id,img,name...)
   .map((product) =>`
   
      <li data-id="${product.id}" class="item product-item">
      <img src="${product.img}" alt="${product.name}" width="300" />
      <h2>${product.name}</h2> 
      <p>Цена: ${product.price} грн</p>
      </li>
   `)
//    так как фун-я возвращает один большой рядок, нужно его разделить с помощью Join
   .join("")
}
// делаем чтоб появлялось окно при делегировании (Реалізуй делегування подій на колекції карток
//  * Після кліку на картку повинно з'являтись модальне вікно) из условия

container.addEventListener("click", lalalaClick);
// фун-я получит обект собітия
function lalalaClick(event){
    // console.log(event.target) - выводит кождый тег, куда кликнем
// чтоб нажав на УЛ выводилось полность все, а не отдельные элементы, нужно:
console.log(event.currentTarget);
// console.log(event.currentTarget); - выведет элемент на котором висит слушитель событий, т.е CONTAINER


// кликнув на любой элемент будет так же выводиться и контейнер
if (event.target === event.currentTarget){
// чтоб кликнув просто вне карточки, не выводилась инфо, делаем прекращения выполнения фун с помощью return
return;
}
// но чтоб сделать так чтоб кликнув на любой изэлементов  ЛИ, выводилось инфо общее, получаем родит эл: создаем любую КОНСТ, 
// обращаемся к элементу(target) на котором произошло событие(event) и вызыв CLOSEST, ОН ВЕРНЕТ БЛИЖАЙШИЙ ЄЛЕМЕНТ ПО КЛАССУ
const currentPtoduct = event.target.closest(".product-item");

// находим id картки, чтоб выводилиь только ID,а не LI
const productId = currentPtoduct.dataset.id;

// полчаем продукт по которому кликнули, так как productId выводится рядок, а не число, приводим его к числу с помощью Number(productId)
const product = products.find(item => item.id === Number(productId));

// console log(product) - выводит элемент полность ЛИ

// делаем модалку, берем из подключенной библиотеки basicLightbox
const instance = basicLightbox.create(`
<div class="modal">
<img src="${product.img}" alt="${product.name}">
<h2>${product.name}</h2>
<h3>${product.price} грн</h3>
<p>${product.description}</p>
</div>
`)
console.log(window);

// тепрь его нужно отобразить
instance.show();
}

// ДЗ в модалке добавляем фото которое увеличено, а когда создаем ЛИ, 
// то фото добавляем ПРЕВЬЮ