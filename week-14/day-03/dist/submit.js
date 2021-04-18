const form = document.querySelector('form');
const title = document.querySelector('#title');
const url = document.querySelector('#url');
const btn = document.querySelector("input[type = 'submit']");

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const http = new XMLHttpRequest();
  http.open('POST', '/posts', true);
  http.setRequestHeader('Content-type', 'application/json');

  if (title.value === '') {
    alert('Post must have a title!');
  } else if (url.value === '') {
    alert("Don't forget the url!");
  } else {
    let body = {
      title: `${title.value}`,
      url: `${url.value}`,
    };
    http.send(JSON.stringify(body));
  }

  http.onload = () => {
    if (http.status === 201 || http.status === 200) {
      window.location.href = 'http://localhost:3005/';
      console.log('lefut');
    } else {
      alert(`something went wrong, error: ${http.status} `);
    }
  };
});
