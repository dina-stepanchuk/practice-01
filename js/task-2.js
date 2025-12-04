const products = [
  {
    url: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
    name: 'Burger',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
    name: 'Pizza',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg',
    name: 'Salad',
  },
];
const gallery = document.querySelector('.products-gallery');
const items = [];
for (const product of products) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');
  img.src = product.url;
  img.alt = product.name;
  p.textContent = product.name;
  li.append(img, p);
  items.push(li);
}

gallery.append(...items);
