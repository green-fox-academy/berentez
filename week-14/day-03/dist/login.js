const btn = document.querySelector("input[type='button']");
const userInput = document.querySelector('#username');
const myStorage = window.localStorage;

btn.addEventListener('click', function () {
  getUser();
});

function getUser() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/loginid', true);
  xhr.setRequestHeader('Content-type', 'application/json');

  let userName = userInput.value;
  xhr.setRequestHeader('user', `${userName}`);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      localStorage.setItem('user', `${data.userid}`);

      window.location.href = 'http://localhost:3005/';
    }
  };
}
