const submit = document.querySelector("input[type = 'button']");
const username = document.querySelector('#username');
const email = document.querySelector('#email');

submit.addEventListener('click', function () {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', '/signup', true);
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onload = function () {
    const response = httpRequest.response;
    document.querySelector('body').textContent = response;
  };

  httpRequest.send(JSON.stringify({ username: username.value, email: email.value }));
});
