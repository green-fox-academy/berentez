// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

const display: HTMLDivElement = document.querySelector('.display');
const button: HTMLButtonElement = document.querySelector('button');
let counter: number = 10;

function displayText(): void {
  if (counter === 0) {
    clearInterval(timer);
    display.innerHTML = 'BOMB exploded!!!';
    return;
  }
  display.innerHTML = counter.toString();
  counter--;
}

let timer = setInterval(displayText, 1000);

button.onclick = function () {
  clearInterval(timer);
  display.innerHTML = 'BOMB defused';
};
