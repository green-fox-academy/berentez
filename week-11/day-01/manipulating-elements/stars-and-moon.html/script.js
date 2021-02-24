// At the beginning, add (append) ten stars to random coordinates via JavaScript. 
// You'll have to create an element with class 'star' and set it an inline style. 
// The left and top coordinates should be in % or vw/vh units so that the stars move if the window size changes.

const section = document.querySelector('.world');


for (let i = 0; i < 10; i++){
  const newStar = document.createElement('div');
  newStar.classList.add('star');
  newStar.setAttribute('style', `left:${randomNum()}%; top: ${randomNum()}%`)
  section.appendChild(newStar)
}


//for random coordianates
function randomNum(){
 return Math.floor(Math.random() * 100);
}