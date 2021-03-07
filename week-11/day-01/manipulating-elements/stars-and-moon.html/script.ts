// 1) At the beginning, add (append) ten stars to random coordinates via JavaScript.
// You'll have to create an element with class 'star' and set it an inline style.
// The left and top coordinates should be in % or vw/vh units so that the stars move if the window size changes.

const section: HTMLElement = document.querySelector('.world');

function addRandomStars(starNumber: number): void {
  for (let i: number = 0; i < starNumber; i++) {
    const newStar: HTMLDivElement = document.createElement('div');
    newStar.classList.add('star');
    newStar.setAttribute('style', `left:${randomNum()}%; top: ${randomNum()}%`);
    section.appendChild(newStar);
  }
}

//for random coordianates
function randomNum(): number {
  return Math.floor(Math.random() * 100);
}

addRandomStars(10);

// 2) On click anywhere on section.world, add a star beneath the cursor.
document.addEventListener('click', addStar);

function addStar(e): void {
  const newStar: HTMLDivElement = document.createElement('div');
  newStar.classList.add('star');
  // I had to use pixel for this to work
  newStar.setAttribute('style', `left:${e.clientX}px; top: ${e.clientY}px`);
  section.appendChild(newStar);
}

//3 On random interval, a star should fall.
// That means you should pick a random star on random interval and give it fallen class,
//  until all stars are fallen.

function fallingStars(): void {
  const stars: NodeListOf<Element> = document.querySelectorAll('.star');
  stars[Math.floor(Math.random() * stars.length)].setAttribute('class', 'star fallen');
}

function randomInterval(): number {
  return Math.round(Math.random() * 3000);
}

setInterval(fallingStars, randomInterval());

// Make trees grow on click!////////////////////////////////////////////////////////////////////Not wrorking

const tree1: HTMLElement = document.querySelectorAll('.one')[0] as HTMLElement;
const tree2: HTMLElement = document.querySelectorAll('.two')[1] as HTMLElement;
const tree: NodeListOf<Element> = document.querySelectorAll('.tree');
const span: HTMLElement = tree1.querySelector('span');
let newNode: HTMLElement = document.createElement('span');

const topStyle: string[] = ['-35px', '-45px', '-55px', '-65px', '-75px'];

function changeTop(): string {
  const styleOne = tree1.style;
  console.log(styleOne);
  for (let i: number = 0; i < topStyle.length; i++) {
    if (styleOne.getPropertyValue('top') === topStyle[i]) {
      console.log(topStyle[i + 1] + 'yO');
      return topStyle[i + 1];
    }
  }
}

// console.log(tree1.getAttribute('top'));

function grow(): void {
  newNode.classList.add('new');
  tree1.insertBefore(newNode, span);
  tree1.setAttribute('style', `top: ${changeTop()}`);
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
