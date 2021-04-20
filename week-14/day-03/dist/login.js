const btn = document.querySelector("input[type='button']");
const userInput = document.querySelector('#username');
const myStorage = window.localStorage;
let userName = userInput.value;

btn.addEventListener('click', function () {
  getUser();
});

function getUser() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/loginid', true);
  xhr.setRequestHeader('Content-type', 'application/json');

  userName = userInput.value;
  xhr.setRequestHeader('user', `${userName}`);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      const id = JSON.parse(xhr.responseText);
      console.log(id);
      localStorage.setItem('user', `${id.userid}`);
      console.log(localStorage);

      window.location.href = 'http://localhost:3005/';
    } else {
      alert(reqName);
      console.log(reqName);
    }
  };
}
