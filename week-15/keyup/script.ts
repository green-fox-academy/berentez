const body: HTMLElement = document.querySelector('body');
const lastPressedKey: HTMLElement = document.querySelector('h1');

body.addEventListener('keyup', function (e) {
  lastPressedKey.innerHTML = `Last pressed key's code is: ${e.code}`;
});
