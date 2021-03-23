const listElements: NodeList = document.querySelectorAll('li');
const btn: HTMLButtonElement = document.querySelector('button');
const p: HTMLElement = document.querySelector('.result');

btn.addEventListener('click', function () {
  p.innerHTML = listElements.length.toString();
});
