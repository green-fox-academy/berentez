const audio = document.querySelector('audio');

audio.addEventListener('loadstart', (event) => {
  callback(event);
});
audio.addEventListener('play', (event) => {
  callback(event);
});
audio.addEventListener('ended', (event) => {
  callback(event);
});

audio.addEventListener('progress', (event) => {
  callback(event);
});

function callback(event) {
  console.log(`${event.type} happened`);
}
