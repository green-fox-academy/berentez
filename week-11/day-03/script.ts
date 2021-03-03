const rightArraw: HTMLElement = document.querySelector('#navigation.right');
const pictures: NodeListOf<Element> = document.querySelectorAll('#thumbnails img');

rightArraw.onclick = () => {
  const activePicture: HTMLElement = document.querySelector('#picture img');
  const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');
  for (let i: number = 0; i < pictures.length; i++) {
    if (pictures[i].getAttribute('src') === activeThumbnail.getAttribute('src')) {
      activePicture.setAttribute('src', pictures[i + 1].getAttribute('src'));
      pictures[i].setAttribute('class', '');
      pictures[i + 1].setAttribute('class', 'activethumbnail');
    }
  }
};

const leftArraw: HTMLElement = document.querySelector('#navigation.left');

leftArraw.onclick = () => {
  const activePicture: HTMLElement = document.querySelector('#picture img');
  const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');
  for (let i: number = 0; i < pictures.length; i++) {
    if (pictures[i].getAttribute('src') === activeThumbnail.getAttribute('src')) {
      activePicture.setAttribute('src', pictures[i + -1].getAttribute('src'));
      pictures[i].setAttribute('class', '');
      pictures[i - 1].setAttribute('class', 'activethumbnail');
    }
  }
};
