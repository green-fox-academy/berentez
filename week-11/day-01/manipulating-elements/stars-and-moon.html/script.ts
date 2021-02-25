// 1) At the beginning, add (append) ten stars to random coordinates via JavaScript.
// You'll have to create an element with class 'star' and set it an inline style.
// The left and top coordinates should be in % or vw/vh units so that the stars move if the window size changes.

const section: HTMLElement = document.querySelector('.world');

for (let i: number = 0; i < 10; i++) {
  const newStar: HTMLDivElement = document.createElement('div');
  newStar.classList.add('star');
  newStar.setAttribute('style', `left:${randomNum()}%; top: ${randomNum()}%`);
  section.appendChild(newStar);
}

//for random coordianates
function randomNum() {
  return Math.floor(Math.random() * 100);
}

// 2) On click anywhere on section.world, add a star beneath the cursor.
document.addEventListener('click', addStar);

function addStar(e) {
  const newStar = document.createElement('div');
  newStar.classList.add('star');
  // I had to use pixel for this to work
  newStar.setAttribute('style', `left:${e.clientX}px; top: ${e.clientY}px`);
  section.appendChild(newStar);
}

//3 On random interval, a star should fall.
// That means you should pick a random star on random interval and give it fallen class,
//  until all stars are fallen.

const stars = document.querySelectorAll('.star');

console.log(stars[Math.floor(Math.random() * stars.length)]);

function fallingStars() {
  // for (let i = 0; i < stars.length; i++) {
  stars[Math.floor(Math.random() * stars.length)].setAttribute('class', 'star fallen');
  // }
}

setInterval(fallingStars, 1000);
