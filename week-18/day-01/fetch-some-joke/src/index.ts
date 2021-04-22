const btn: HTMLButtonElement = document.querySelector('button');

function getJokes() {
  return fetch('http://api.icndb.com/jokes/random')
    .then((res) => {
      return res.json();
    })
    .then((response) => writeJoke(response.value.joke))
    .catch((error) => console.error('Not a single Chuck Norris Joke for you: ', error));
}

function writeJoke(jokes: string): void {
  let con: HTMLDivElement = document.querySelector('div');
  const joke: HTMLElement = document.createElement('p');
  joke.textContent = jokes.toString();
  con.appendChild(joke);
}

btn.addEventListener('click', function () {
  getJokes();
});
