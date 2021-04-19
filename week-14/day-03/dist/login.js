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
  let reqName = {
    user: userName,
  };
  // console.log(JSON.stringify(reqName));
  xhr.send(JSON.stringify(reqName));
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log('response ', JSON.stringify(xhr.responseText));
      alert(JSON.stringify(xhr.responseText));
      // let response = JSON.parse(httpRequest.responseText);
      // console.log(response);
      // window.location.href = 'http://localhost:3005/';
    } else {
      alert(reqName);
      console.log(reqName);
    }
  };
  // const user = userInput.value;
  // let body = {
  //   user: user,
  // };
}

// window.onload = () => {

// };
