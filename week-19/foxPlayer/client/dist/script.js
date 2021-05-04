const category = document.querySelector('.category');
const tracks = document.querySelector('.tracks');
const songs = document.querySelectorAll('.tracks > p');

const displayPlaylist = () => {
  return fetch('http://localhost:3000/playlist')
    .then((res) => res.json())
    .then((response) => writePlaylist(response))
    .catch((err) => writeError(err));
};

function writePlaylist(data) {
  data.forEach((playListElement) => {
    const listElemenet = document.createElement('p');
    listElemenet.innerText = playListElement.title;
    listElemenet.onclick = () => listTracks(playListElement.id);
    category.appendChild(listElemenet);
  });
}

const listTracks = (id) => {
  return fetch(`http://localhost:3000/playlist_tracks/${id}`)
    .then((res) => res.json())
    .then((response) => writeTracks(response))
    .catch((err) => writeError(err));
};

function writeTracks(data) {
  console.log('fut');
  // let counter = 1;
  data.forEach((song) => {
    const track = document.createElement('p');
    track.innerText = song.title;
    tracks.appendChild(track);
  });
}

window.onload = () => {
  displayPlaylist();
};
