const rightArraw: HTMLElement = document.querySelector('#navigation.right');
const thumbnails: NodeListOf<Element> = document.querySelectorAll('#thumbnails img');
const title = document.querySelector('.discription h2');
const text = document.querySelector('.discription p');
const activePicture: HTMLElement = document.querySelector('#picture img');
const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');
const leftArraw: HTMLElement = document.querySelector('#navigation.left');

//////////////////////////////////

//arriw right
rightArraw.onclick = () => {
  changeByArrow(1);
};

//arrow left
leftArraw.onclick = () => {
  changeByArrow(-1);
};

//thumbnail click
for (let i: number = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function () {
    changePic(i, 0);
  });
}

//////////////////////////////////

function changeByArrow(direction: number) {
  const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');
  for (let i: number = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].getAttribute('src') === activeThumbnail.getAttribute('src')) {
      changePic(i, direction);
    }
  }
}

function changePic(i: number, direction?: number) {
  const activeThumbnail: HTMLElement = document.querySelector('.activethumbnail');
  activePicture.setAttribute('src', thumbnails[i + direction].getAttribute('src'));
  activeThumbnail.setAttribute('class', '');
  thumbnails[i + direction].setAttribute('class', 'activethumbnail');
  title.textContent = thumbnails[i + direction].getAttribute('title');
  text.textContent = thumbnails[i + direction].getAttribute('text');
}
