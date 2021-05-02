const form = document.querySelector('form');
const title = document.querySelector('#title');
const url = document.querySelector('#url');
const btn = document.querySelector("input[type = 'submit']");

const data = btn.addEventListener('click', (event) => {
  event.preventDefault();
  const id = localStorage.post;

  return fetch(`http://localhost:3005/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      user: `${localStorage.user}`,
    },
    body: JSON.stringify({
      title: title.value,
      url: url.value,
    }),
  })
    .then(() => (window.location.href = 'http://localhost:3005/'))
    .catch((err) => console.error(err));
});
