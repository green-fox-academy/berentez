// 1) Obtain an API key
// 2) Search/Find the images in the API
// 3) Display the list of the first 16 results' static thumbnail
// 4) If the user clicks on the thumbnail, display the animated GIF

const http = new XMLHttpRequest();
const palette = document.querySelector('#container');

http.onreadystatechange = () => {
  if (http.readyState === 4 && http.status === 200) {
    console.log(JSON.parse(http.response));
  }
};

//1
http.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=Rc3d5oFRWm5Zw2DDRPy2cGkyDqO2og67', true);
http.send();

http.onload = function () {
  if (http.status >= 200 && http.status < 400) {
    const myData = JSON.parse(http.responseText);

    //3
    createThumbnail(myData);

    display(gif);
  }
};

const main = document.querySelector('#display');

//3

function createThumbnail(data) {
  console.log('runnn');
  for (let i = 0; i < 16; i++) {
    const newThumbnail = document.createElement('img');
    newThumbnail.classList.add('gif');
    palette.appendChild(newThumbnail);
    newThumbnail.setAttribute('src', data.data[i].images.fixed_width_small_still.url);
  }
}

const gif = document.querySelectorAll('.gif');

function display() {
  for (let i = 0; i < gif.length; i++) {
    gif[i].addEventListener('click', function () {
      changeGif(i);
      console.log('running');
    });
  }
}

function changeGif(n) {
  const active = document.querySelector('.active');
  active.setAttribute('class', '');
  gif(n).classList.add('active');
  active = document.querySelector('.active');
  main.setAttribute('style', `background-image: ${active} `);
  console.log('run');
}
