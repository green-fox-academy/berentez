const rightArraw: HTMLElement = document.querySelector('#navigation.right');
const thumbnails: NodeListOf<Element> = document.querySelectorAll('#thumbnails img');
const title = document.querySelector('.discription h2');
const text = document.querySelector('.discription p');
const activePicture: HTMLElement = document.querySelector('#picture img');
const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');

//needs refactoring

rightArraw.onclick = () => {
  const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');
  for (let i: number = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].getAttribute('src') === activeThumbnail.getAttribute('src')) {
      activePicture.setAttribute('src', thumbnails[i + 1].getAttribute('src'));
      activeThumbnail.setAttribute('class', '');
      thumbnails[i + 1].setAttribute('class', 'activethumbnail');
      title.textContent = thumbnails[i + 1].getAttribute('title');
      text.textContent = thumbnails[i + 1].getAttribute('text');
    }
  }
};

const leftArraw: HTMLElement = document.querySelector('#navigation.left');

leftArraw.onclick = () => {
  const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');
  for (let i: number = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].getAttribute('src') === activeThumbnail.getAttribute('src')) {
      activePicture.setAttribute('src', thumbnails[i + -1].getAttribute('src'));
      activeThumbnail.setAttribute('class', '');
      thumbnails[i - 1].setAttribute('class', 'activethumbnail');
      title.textContent = thumbnails[i + -1].getAttribute('title');
      text.textContent = thumbnails[i + -1].getAttribute('text');
    }
  }
};

// clicking on thumbnails
for (let i: number = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function () {
    const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');
    activeThumbnail.setAttribute('class', '');
    activePicture.setAttribute('src', thumbnails[i].getAttribute('src'));
    thumbnails[i].setAttribute('class', 'activethumbnail');
    title.textContent = thumbnails[i].getAttribute('title');
    text.textContent = thumbnails[i].getAttribute('text');
  });
}
