// Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

const buton: HTMLButtonElement = document.querySelector('button');
const textBox: HTMLDivElement = document.querySelector('#display');

buton.addEventListener('click', function (e) {
  const text = document.createElement('h1');
  text.innerHTML = '2 seconds ellapsed Dude!';
  setTimeout(() => {
    textBox.appendChild(text);
  }, 2000);
});
