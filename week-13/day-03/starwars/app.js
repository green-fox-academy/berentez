// The input text's content should be sent to the people's api and you should perform a search with it.
// If you get the response, you should display all the results.
// If the user clicks on the character's name, then perform another Ajax
// request and display all the films they appeared in.

const btn = document.querySelector('#btn');
const search = document.querySelector('#input');

btn.addEventListener('click', function () {
  const http = new XMLHttpRequest();
  http.open('GET', `https://swapi.dev/api/people/?search=${search.value}`);
  http.onload = function () {
    if (http.status >= 200 && http.status < 400) {
      const myData = JSON.parse(http.responseText);
      renderHTML(myData);
    } else {
      console.log('error');
    }
  };
  http.send();
});

//add searched names to the container
function renderHTML(data) {
  const nameDisplay = document.querySelector('.name ul');

  for (i = 0; i < data.count; i++) {
    const newName = document.createElement('li');
    newName.innerHTML = data.results[i].name;
    nameDisplay.appendChild(newName);
    clickEvent(newName, data, i);
  }
}

function clickEvent(name, data, index) {
  name.addEventListener('click', function () {
    for (let i = 0; i < data.results[index].films.length; i++) {
      const http = new XMLHttpRequest();
      http.open('GET', `${data.results[index].films[i]}`);
      http.onload = function () {
        if (http.status >= 200 && http.status < 400) {
          const filmData = JSON.parse(http.responseText);

          printFilms(filmData);
        } else {
          console.log('We connected to the server, but it returned an error');
        }
      };
      deleteList();
      http.send();
    }
  });
}

function printFilms(data) {
  const filmDisplay = document.querySelector('.films ul');
  const film = document.createElement('li');
  film.innerHTML = `${data.title} (${data.release_date})`;
  filmDisplay.appendChild(film);
}

//removing previous search
function deleteList() {
  const target = document.querySelectorAll('.films ul li');
  const filmDisplay = document.querySelector('.films ul');
  for (let i = 0; i < target.length; i++) {
    filmDisplay.removeChild(target[i]);
  }
}
