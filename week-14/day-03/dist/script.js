const container = document.querySelector('.posts');

function getposts() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const posts = JSON.parse(httpRequest.responseText);
    showPost(posts);
  };
  httpRequest.open('GET', 'http://localhost:3005/posts', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.send();
}

function showPost(posts) {
  posts.forEach((element) => {
    const divCon = document.createElement('div');
    divCon.classList.add('post');
    container.appendChild(divCon);

    const title = document.createElement('h2');
    const link = document.createElement('a');
    const timestamp = document.createElement('p');

    title.innerText = element.title;
    link.innerText = element.url;
    timestamp.innerText = element.timestamp;

    divCon.appendChild(title);
    divCon.appendChild(link);
    divCon.appendChild(timestamp);
  });
}

window.onload = () => {
  getposts();
};
