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
  }
  
  //1
  http.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=Rc3d5oFRWm5Zw2DDRPy2cGkyDqO2og67', false);
  http.send();

http.onload = function () {
  if (http.status >= 200 && http.status < 400) {
    const ourData = JSON.parse(http.responseText);

  //3
    for (let i = 0; i < 16; i++){
    createThumbnail(ourData.data[i].images['fixed_width_small_still'].url)

    display(ourData.data[i].images['original'].url, i)

  }
  } else {
    console.log('We connected to the server, but it returned an error');
  }
}


const gif = document.getElementsByTagName('img');
console.log(gif.length)
for (let i = 0; i < gif.img; i++){
  gif[i].addEventListener('click', function () {
    gif[i].classList.add('active')
    console.log(document.querySelector('.active'))
  });
}


const main = document.querySelector('#display')

//3

function createThumbnail(data) {
  const newThumbnail = document.createElement('img');
  newThumbnail.classList.add('gif');
  palette.appendChild(newThumbnail);
  newThumbnail.setAttribute('src', data);
}


function changePic(data) {
  const active = document.querySelector('img.active');
  console.log(active)
  if (document.querySelector('.active') !== undefined){
    active.setAttribute('class', '');
  }
    data.setAttribute('class', 'active');
  active = document.querySelector('.active');
}




const gifs = document.querySelectorAll('img.gif')
console.log('gifs' + gifs)

function display(data, index){
  const gifs = document.querySelectorAll('img.gif')
  gifs[index].addEventListener('click', function() {
    main.setAttribute('style', `background-image:${data}`)
  })
}








