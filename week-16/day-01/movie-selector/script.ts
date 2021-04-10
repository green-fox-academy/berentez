const movies: NodeListOf<Element> = document.querySelectorAll('option.movie');
const genreSelector: HTMLSelectElement = document.querySelector('#genre');

genreSelector.addEventListener('change', (e) => {
  movies.forEach((value) => {
    value.setAttribute('style', 'display: none');
  });
  const genreChosen = e.target.value;
  for (let i: number = 0; i < movies.length; i++) {
    if (movies[i].classList.contains(genreChosen)) {
      movies[i].setAttribute('style', 'display: initial ');
    }
  }
});
