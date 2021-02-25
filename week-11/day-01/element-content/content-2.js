//1.

const listElements =  ['apple', 'banana', 'cat', 'dog']

const list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = listElements[i];
}


//2.

const container = document.querySelector('ul');
container.style.backgroundColor = 'limegreen';