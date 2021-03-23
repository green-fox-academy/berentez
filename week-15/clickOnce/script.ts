const timestamp: number = Date.now();
const btn: HTMLButtonElement = document.querySelector('button');
const bd: HTMLElement = document.querySelector('body');

//First way to disable button
btn.addEventListener('click', function () {
  const newTimestamp: HTMLElement = document.createElement('p');
  newTimestamp.innerHTML = timestamp.toString();
  bd.appendChild(newTimestamp);
  btn.disabled = true;
});
