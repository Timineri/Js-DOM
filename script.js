const myHeading = document.querySelector('#myHeading');
const button = document.getElementById('button');
const input = document.querySelector('#input');

// button.addEventListener('click', () => {
// myHeading.style.color = input.value;
// });

const list = document.getElementsByTagName('li');

for (let i = 0; i < list.length; i++) {
    list[i].style.color = 'purple';
};

const error = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < error.length; i++) {
    error[i].style.color = 'red';
};

evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < evens.length; i++) {
    evens[i].style.color = '#FFF';
};



const hideButton = document.getElementById('hideButton');
const divList = document.getElementById('div-list');

hideButton.addEventListener('click', () => {
    if (divList.style.display == 'block') {
        hideButton.textContent = 'Show List'
        divList.style.display = 'none';
    } else {
        hideButton.textContent = 'Hide List'
        divList.style.display = 'block';
    }
});


const inputItem = document.querySelector('#input-item');
const buttonItem = document.querySelector('#button-item');

buttonItem.addEventListener('click', () => {
    const ul = document.getElementsByTagName('ul')[0];
    const li = document.createElement('li');
    li.textContent = inputItem.value;
    ul.appendChild(li);
    inputItem.value = '';
})


