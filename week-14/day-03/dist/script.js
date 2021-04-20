const container = document.querySelector('.posts');

function getposts() {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onload = () => {
    const posts = JSON.parse(httpRequest.responseText);
    showPost(posts);
  };
  httpRequest.open('GET', 'http://localhost:3005/posts', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.setRequestHeader('user', `${localStorage.user}`);
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

  const up = document.createElement('radio');
  const score = document.createElement('p');
  const down = document.createElement('radio');

  up.classList.add('arrow', 'up');
  up.setAttribute('id', `${element.id}`);
  up.setAttribute('name', 'arrow');
  down.classList.add('arrow', 'down');
  down.setAttribute('name', 'arrow');
  parent.classList.add('score');
  if (element.vote === 1) {
    up.classList.add('upvoted');
  } else if (element.vote === -1) {
    down.classList.add('downvoted');
  }

  up.addEventListener('click', function () {
    vote(up, element);
    console.log('upvote');

    askScore(element, score);
    console.log('score ', score.textContent);
  });

  down.addEventListener('click', function () {
    if (down.classList.contains('downvoted')) {
      down.classList.remove('downvoted');
    } else {
      down.classList.add('downvoted');
      up.classList.remove('upvoted');
    }
  });

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

function calculateTime(time1, time2) {
  const difference = Math.abs(time2 - time1);
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
  if (days < 2) {
    return `${Math.ceil(difference / (60 * 60 * 60 * 24))} hours ago`;
  } else {
    return `${days} days ago`;
  }
}

const btn = document.querySelector('button.submit');

btn.onclick = function () {
  location.href = 'http://localhost:3005/createpost';
};

function vote(arrow, element, score) {
  console.log(element.id);
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `/posts/${element.id}/upvote`, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('user', `${localStorage.user}`);
  xhr.send();

  xhr.onload = () => {
    if (arrow.classList.contains('upvoted')) {
      arrow.classList.remove('upvoted');
      // score.textcontent = parseInt(textcontent) - 1;
    } else {
      arrow.classList.add(`upvoted`);
      // score.textcontent = parseInt(textcontent) + 1;
    }
  };
}

function askScore(element, score) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `score/${element.id}`, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('user', `${localStorage.user}`);
  xhr.send();

  xhr.onload = () => {
    score.innerText = JSON.parse(xhr.responseText).score;
    // score.innerText = responseText;
  };
}

window.onload = () => {
  getposts();
};
