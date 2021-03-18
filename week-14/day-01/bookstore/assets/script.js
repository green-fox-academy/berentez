const apiURL = 'http://localhost:3000';

function getBooks() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const books = httpRequest.response;
    console.log(books);
  };
  httpRequest.open('GET', `${apiURL}/book`, true);
  httpRequest.send();
}

window.onload = () => {
  getBooks();
};
