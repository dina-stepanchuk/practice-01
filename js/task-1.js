const category = document.querySelectorAll('.ingredient-item');
console.log(`Number of categories: ${category.length}`);
category.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const numberItem = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${numberItem}`);
});
