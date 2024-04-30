const myHeading = document.getElementById("myHeading");
const button = document.getElementById("button");
// const input = document.getElementById("input");
// const list = document.getElementsByTagName("li");



const input = document.querySelector('.input');
const addItem = document.querySelector('.add-item');

addItem.addEventListener('click', () => {
  const ul = document.getElementsByTagName('ul')[0];
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li)
  input.value = '';
})

