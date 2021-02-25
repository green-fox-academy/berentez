// 1) At the beginning, add (append) ten stars to random coordinates via JavaScript. 
// You'll have to create an element with class 'star' and set it an inline style. 
// The left and top coordinates should be in % or vw/vh units so that the stars move if the window size changes.

const section = document.querySelector('.world');


for (let i = 0; i < 10; i++){
  const newStar = document.createElement('div');
  newStar.classList.add('star');
  newStar.setAttribute('style', `left:${randomNum()}%; top: ${randomNum()}%`)
  section.appendChild(newStar);
}

//for random coordianates
function randomNum(){
 return Math.floor(Math.random() * 100);
}

// 2) On click anywhere on section.world, add a star beneath the cursor.
document.addEventListener('click', addStar);

function addStar(e){
  const newStar = document.createElement('div');
  newStar.classList.add('star');
  // I had to use pixel for this to work
  newStar.setAttribute('style', `left:${e.clientX}px; top: ${e.clientY}px`)
  section.appendChild(newStar);
}



