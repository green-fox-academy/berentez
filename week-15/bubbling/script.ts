const nav: HTMLElement = document.querySelector('nav');
const pic: HTMLDivElement = document.querySelector('.img-inspector');
let background: number[] = [0, 0];
let size: number = 200;

//move buttons working,

nav.addEventListener('click', function (e) {
  const target: HTMLButtonElement = e.target as HTMLButtonElement;
  const attribute = target.getAttribute('data-direction');
  if (attribute === 'up') {
    background[1] += 10;
  } else if (attribute === 'down') {
    background[1] += -10;
  } else if (attribute === 'right') {
    background[0] += -10;
  } else if (attribute === 'left') {
    background[0] += 10;
  }
});

nav.addEventListener('click', function (e) {
  const target: HTMLButtonElement = e.target as HTMLButtonElement;
  const attribute = target.getAttribute('data-direction');
  if (attribute === 'in') {
    size += 20;
  } else if (attribute === 'out') {
    size += -20;
  }
  pic.setAttribute('style', `background-size: ${size}%; background-position: ${background[0]}px ${background[1]}px`);
});
