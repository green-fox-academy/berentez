// The input text's content should be sent to the people's api and you should perform a search with it.

const btn = document.querySelector('#btn');
const search = document.querySelector('#input');

btn.addEventListener('click', function () {
  const http = new XMLHttpRequest();
  http.open('GET', `https://swapi.dev/api/people/?search=${search.value}`);
  http.onload = function () {
    if (http.status >= 200 && http.status < 400) {
      const myData = JSON.parse(http.responseText);
      console.log(myData);
    } else {
      console.log('We connected to the server, but it returned an error');
    }
  };
  http.send();
});

console.log(search.value);
