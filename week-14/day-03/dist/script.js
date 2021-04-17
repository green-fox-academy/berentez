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
    createVoteBox(divCon, element);
    createContentBox(divCon, element);
  });
}

function createVoteBox(parent, element) {
  const box = document.createElement('div');
  box.classList.add('vote-box');

  const up = document.createElement('button');
  const score = document.createElement('p');
  const down = document.createElement('button');

  up.classList.add('arrow', 'up');
  down.classList.add('arrow', 'down');
  parent.classList.add('score');
  if (element.vote === 1) {
    up.classList.add('upvoted');
  } else if (element.vote === -1) {
    down.classList.add('downvoted');
  }

  score.textContent = element.score;

  box.appendChild(up);
  box.appendChild(score);
  box.appendChild(down);

  parent.appendChild(box);
}

function createContentBox(parent, element) {
  const box = document.createElement('div');
  box.classList.add('content-box');

  const title = document.createElement('h2');
  const link = document.createElement('a');
  const timestamp = document.createElement('p');

  title.innerText = element.title;
  link.innerText = element.url;
  timestamp.innerText = `Posted by ${element.owner} ${calculateTime(new Date(), new Date(element.timestamp))}.`;

  box.appendChild(title);
  box.appendChild(link);
  box.appendChild(timestamp);

  parent.appendChild(box);
}

function calculateTime() {}

function calculateTime(time1, time2) {
  const difference = Math.abs(time2 - time1);
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
  if (days < 2) {
    console.log('lefut');
    return `${Math.ceil(difference / (60 * 60 * 60 * 24))} hours ago`;
  } else {
    return `${days} days ago`;
  }
}

window.onload = () => {
  getposts();
};
