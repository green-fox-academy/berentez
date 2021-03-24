// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

const button: HTMLButtonElement = document.querySelector('button');
const textBox: HTMLDivElement = document.querySelector('#display');
let countClick: number = 0;
let timeCount: number = 0;

window.onload = runThis;

function runThis() {
  const interval: NodeJS.Timeout = setInterval(function () {
    timeCount += 1000;
    console.log(timeCount);
    if (timeCount >= 5000) {
      clearInterval(interval);
      button.addEventListener('click', function (e) {
        console.log(countClick);
        if (countClick !== 2) {
          countClick++;
        } else {
          const text = document.createElement('h1');
          text.innerHTML = '5 seconds elapsed and clicked 3 times';
          textBox.appendChild(text);
          countClick = 0;
        }
      });
    }
  }, 1000);
}
