function randomDiv(): void {
  const container: HTMLDivElement = document.querySelector('#container');
  console.log(container);
  const randomNum: number = Math.floor(Math.random() * 20);
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
  randomDiv();
};
