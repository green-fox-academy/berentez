const category = document.querySelector('.category');
const tracks = document.querySelector('.tracks');
const songs = document.querySelectorAll('.tracks > p');
const notification = document.querySelector('.notifications');

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

const selectAllTracks = () => {
  return fetch(`http://localhost:3000/playlist_tracks/`)
    .then((res) => res.json())
    .then((response) => writeTracks(response))
    .catch((err) => writeError(err));
};

const listTracks = (id) => {
  return fetch(`http://localhost:3000/playlist_tracks/${id}`)
    .then((res) => res.json())
    .then((response) => writeTracks(response))
    .catch((err) => writeError(err));
};

function writeTracks(data) {
  let counter = 1;
  data.forEach((song) => {
    let num = document.createElement('span');
    num.innerText = counter;
    const track = document.createElement('p');
    track.innerText = song.title;
    tracks.appendChild(num);
    tracks.appendChild(track);
    counter++;
  });
}

function writeError(err) {
  const error = document.createElement('p');
  error.innerText = err;
  notification.appendChild(error);
}

window.onload = () => {
  displayPlaylist();
};
