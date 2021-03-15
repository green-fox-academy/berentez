// The input text's content should be sent to the people's api and you should perform a search with it.
// If you get the response, you should display all the results.
const btn = document.querySelector('#btn');
const search = document.querySelector('#input');

btn.addEventListener('click', function () {
  const http = new XMLHttpRequest();
  http.open('GET', `https://swapi.dev/api/people/?search=${search.value}`);
  http.onload = function () {
    if (http.status >= 200 && http.status < 400) {
      const myData = JSON.parse(http.responseText);
      console.log(myData);
      renderHTML(myData);
    } else {
      console.log('We connected to the server, but it returned an error');
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
  }
}
