const movies: NodeListOf<Element> = document.querySelectorAll('option.movie');
const genreSelector: HTMLSelectElement = document.querySelector('#genre');
const filmSelector: HTMLSelectElement = document.querySelector('#movies');

genreSelector.addEventListener('change', (e) => {
  movies.forEach((value) => {
    value.setAttribute('style', 'display: none');
  });
  choseGenre(e.target);
});

function choseGenre(target) {
  const genreChosen = target.value;
  for (let i: number = 0; i < movies.length; i++) {
    if (movies[i].classList.contains(genreChosen)) {
      movies[i].setAttribute('style', 'display: initial ');
    }
  }
}

filmSelector.addEventListener('change', (e) => {
  let result: HTMLElement = document.querySelector('.response');

  result.setAttribute('style', 'color: rgba(131, 144, 204, 1); font-size: large; font-weight: bold');
  result.innerText = (<HTMLInputElement>e.target).value;
});
