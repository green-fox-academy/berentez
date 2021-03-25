const scrollThreshold: number = 300;
let lastKnownPosition: number = 0;

function randomDiv(divNum: number): void {
  const container: HTMLDivElement = document.querySelector('#container');
  console.log(container);
  const randomNum: number = divNum;
  for (let i: number = 0; i < randomNum; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.setAttribute('style', `background-color: #${randomCol()}`);

    container.appendChild(newDiv);
  }
}

function randomCol(): string {
  const col: string = Math.floor(Math.random() * 16777215).toString(16);
  return col;
}

window.onload = () => {
  randomDiv(Math.floor(Math.random() * 20) + 10);
};

window.addEventListener('scroll', function (e) {
  lastKnownPosition = window.scrollY;
  let divNum: number = document.querySelectorAll('.box').length;
  let windowHeight: number = divNum * 200 - window.innerHeight;
  console.log(windowHeight - scrollThreshold, lastKnownPosition);
  if (windowHeight - scrollThreshold <= lastKnownPosition) {
    randomDiv(10);
  }
});
