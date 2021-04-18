const btn = document.querySelector("input[type='button']");
const userInput = document.querySelector('#username');
const myStorage = window.localStorage;

btn.addEventListener('click', function () {
  getUser();
});

function getUser() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/header', true);
  httpRequest.setRequestHeader('Content-type', 'application/json');
  // let body = {
  //   user =
  // }
  const user = userInput.value;
  myStorage.setItem('user', user);
  console.log(myStorage);
  httpRequest.send(JSON.stringify(myStorage));

  httpRequest.onload = () => {
    if (httpRequest.status >= 200) {
      window.location.href = 'http://localhost:3005/';
      console.log(myStorage);
    } else {
      alert(http.status);
    }
  };
}

window.onload = () => {};
