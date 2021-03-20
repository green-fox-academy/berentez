const apiURL = 'http://localhost:3000';

//1st task
function getBooks() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const books = JSON.parse(httpRequest.response);
    addBooks(books);
  };
  httpRequest.open('GET', `${apiURL}/booktitle`, true);
  httpRequest.send();
}

// adding books
function addBooks(books) {
  const tBody = document.querySelector('tbody');
  books.forEach((bookName) => {
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    title.textContent = bookName.book_name;
    tr.appendChild(title);
    tBody.appendChild(tr);
  });
}

//2nd task
// All books with full data
// List the following data: - title of book - name of author - category - name of publisher - price
// Return an HTML file with a <table> that contains these information

function getBookData() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const books = JSON.parse(httpRequest.response);
    const tBody = document.querySelector('tbody');

    addAllData(books, tBody);
  };
  httpRequest.open('GET', `${apiURL}/book`, true);
  httpRequest.send();
}

function addAllData(books, body) {
  books.forEach((book) => {
    const tr = document.createElement('tr');

    const title = document.createElement('td');
    title.textContent = book.book_name;
    tr.appendChild(title);

    const author = document.createElement('td');
    author.textContent = book.aut_name;
    tr.appendChild(author);

    const category = document.createElement('td');
    category.textContent = book.cate_descrip;
    tr.appendChild(category);

    const publisher = document.createElement('td');
    publisher.textContent = book.pub_name;
    tr.appendChild(publisher);

    const price = document.createElement('td');
    price.textContent = `${book.book_price} $`;
    tr.appendChild(price);
    body.appendChild(tr);
  });
}

window.onload = () => {
  getBookData();
};
// Create filters
// Add filtering options to the previous endpoint
// If a filter exists, only list records in case the cell matches the filter's value
// Implement these filters as query string parameters: - Category as category - Publisher as publisher - Price lower than as plt - Price greater than as pgt
// Multiple filters can be present at the same time
// For example /books?category=Science should only return books in the Science category.
