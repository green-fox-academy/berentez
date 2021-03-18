const apiURL = 'http://localhost:3000';

function getBooks() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const books = JSON.parse(httpRequest.response);
    addBooks(books);
  };
  httpRequest.open('GET', `${apiURL}/book`, true);
  httpRequest.send();
}

window.onload = () => {
  getBooks();
};

//adding books
function addBooks(books) {
  const tBody = document.querySelector('tbody');
  books.forEach((bookName) => {
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    tdTitle.textContent = bookName.book_name;
    tr.appendChild(tdTitle);
    tBody.appendChild(tr);
  });
}
