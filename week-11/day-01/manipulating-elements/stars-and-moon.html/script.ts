// 1) At the beginning, add (append) ten stars to random coordinates via JavaScript.
// You'll have to create an element with class 'star' and set it an inline style.
// The left and top coordinates should be in % or vw/vh units so that the stars move if the window size changes.

const section: HTMLElement = document.querySelector('.world');

for (let i: number = 0; i < 100; i++) {
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
  const newStar: HTMLDivElement = document.createElement('div');
  newStar.classList.add('star');
  // I had to use pixel for this to work
  newStar.setAttribute('style', `left:${e.clientX}px; top: ${e.clientY}px`);
  section.appendChild(newStar);
}

//3 On random interval, a star should fall.
// That means you should pick a random star on random interval and give it fallen class,
//  until all stars are fallen.

const stars = document.querySelectorAll('.star');

function fallingStars() {
  stars[Math.floor(Math.random() * stars.length)].setAttribute('class', 'star fallen');
}

setInterval(fallingStars, 1000);

// Make trees grow on click!////////////////////////////////////////////////////////////////////Not wrorking
// Need to do other staff have to come back!

const tree1: HTMLElement = document.querySelectorAll('.tree')[0] as HTMLElement;
const tree2: HTMLElement = document.querySelectorAll('.tree')[1] as HTMLElement;
const span: HTMLElement = tree1.querySelector('span');
let newNode: HTMLElement = document.createElement('span');

function grow(): void {
  newNode.classList.add('new');
  tree1.insertBefore(newNode, span);
}

tree1.addEventListener('click', grow);
// for (let i: number = 0; i < tree.length; i++) {
//   tree[i].addEventListener('click', grow);
// }

// ++ function:  more trees
document.addEventListener('auxclick', addTree);
const horizon = document.querySelector('div.horizon');

function addTree() {
  const newTree: HTMLDivElement = document.createElement('div');
  if (Math.round(Math.random()) === 0) {
    newTree.setAttribute('class', 'tree one');
    newTree.setAttribute('style', `top: -35px; right: ${randomNum()}vw`);
  } else {
    newTree.setAttribute('class', 'tree two');
    newTree.setAttribute('style', `top: -45px; right: ${randomNum()}vw`);
  }

  addSpan(newTree);

  horizon.appendChild(newTree);
}

function addSpan(tree) {
  let spanNumber: number = 0;
  if (tree.classList.contains('two')) {
    spanNumber = 4;
  } else {
    spanNumber = 3;
  }

  for (let i: number = 0; i < spanNumber; i++) {
    tree.appendChild(document.createElement('span'));
  }
}
