const container = document.querySelector('.posts');

//display post
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
    up.classList.add('upvote');
  } else if (element.vote === -1) {
    down.classList.add('downvote');
  }

  //vote
  up.addEventListener('click', function () {
    vote('upvote', element, up, down, 'downvote');
    askScore(element, score);
  });

  down.addEventListener('click', function () {
    vote('downvote', element, down, up, 'upvote');
    askScore(element, score);
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
  const update = document.createElement('span');
  const remove = document.createElement('span');

  update.onclick = () => {
    if (element.owner === 'Anonymus' || element.owner_id.toString() === localStorage.user) {
      localStorage.setItem('post', `${element.id}`);
      location.href = 'http://localhost:3005/updatepost';
    }
  };

  remove.onclick = () => {
    if (element.owner === 'Anonymus') {
      removeAnonymPost(element.id);
      parent.remove();
    } else if (element.owner_id.toString() === localStorage.user) {
      removePost(element.id);
      parent.remove();
    }
  };

  update.classList.add('update');
  remove.classList.add('remove');

  title.innerText = element.title;
  link.innerText = element.url;
  timestamp.innerText = `Posted by ${element.owner} ${calculateTime(new Date(), new Date(element.timestamp))}.`;
  update.innerText = 'UPDATE';
  remove.innerText = 'REMOVE';

  box.appendChild(title);
  box.appendChild(link);
  box.appendChild(timestamp);
  box.appendChild(update);
  box.appendChild(remove);

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

const update = document.querySelector('.update');
const remove = document.querySelector('.remove');

// update.onclick = function () {
//   location.href = 'http://localhost:3005/updatepost';
// };

///ezen lehetne még dolgozni
function vote(vote, element, arrow, arrowTwo, voteTwo) {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `/posts/${element.id}/${vote}`, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('user', `${localStorage.user}`);
  xhr.send();

  xhr.onload = () => {
    if (arrow.classList.contains(vote)) {
      arrow.classList.remove(vote);
    } else if (arrowTwo.classList.contains(voteTwo)) {
      arrow.classList.add(vote);
      arrowTwo.classList.remove(voteTwo);
    } else {
      arrow.classList.add(vote);
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
    console.log(JSON.parse(xhr.responseText));
    score.innerText = JSON.parse(xhr.responseText).score;
  };
}

window.onload = () => {
  getposts();
};

//after learning fetch

const removePost = (id) => {
  return fetch(`http://localhost:3005/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      user: `${localStorage.user}`,
    },
  }).catch((err) => console.error(err));
};

const removeAnonymPost = (id) => {
  return fetch(`http://localhost:3005/posts/${id}/anonymus`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
