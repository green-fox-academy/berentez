// 1) Obtain an API key
// 2) Search/Find the images in the API
// 3) Display the list of the first 16 results' static thumbnail
// 4) If the user clicks on the thumbnail, display the animated GIF

const http = new XMLHttpRequest();
const palette = document.querySelector('#container');

//1
http.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=Rc3d5oFRWm5Zw2DDRPy2cGkyDqO2og67', true);

http.onload = function () {
  if (http.status >= 200) {
    const myData = JSON.parse(http.responseText);

    //3
    createThumbnail(myData);
  }
};
http.send();

const main = document.querySelector('#display');

//3

function createThumbnail(data) {
  for (let i = 0; i < 16; i++) {
    const newThumbnail = document.createElement('img');
    newThumbnail.classList.add('gif');
    palette.appendChild(newThumbnail);
    newThumbnail.setAttribute('src', data.data[i].images.fixed_width_small_still.url);
    display(data, i);
  }
}

function display(data, i) {
  const gif = document.querySelectorAll('.gif');
  gif[i].addEventListener('click', function () {
    main.setAttribute('src', data.data[i].images.original.url);
  });
}
