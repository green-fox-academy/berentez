const apiURL = 'http://localhost:3000';

// function getBooks() {
//   const httpRequest = new XMLHttpRequest();
//   httpRequest.onload = () => {
//     const books = JSON.parse(httpRequest.response);
//     addBooks(books);
//   };
//   httpRequest.open('GET', `${apiURL}/booktitle`, true);
//   httpRequest.send();
// }

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

window.onload = () => {
  getBookData();
};

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
    price.textContent = `${book.book_price} USD`;
    tr.appendChild(price);
    body.appendChild(tr);
  });
}

//adding books
// function addBooks(books) {
//   const tBody = document.querySelector('tbody');
//   books.forEach((bookName) => {
//     const tr = document.createElement('tr');
//     const title = document.createElement('td');
//     title.textContent = bookName.book_name;
//     tr.appendChild(title);
//     tBody.appendChild(tr);
//   });
// }
