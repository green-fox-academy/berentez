const wrapper = document.querySelector('div');

const party = document.createElement('div');
wrapper.appendChild(party);

const button = document.querySelector('button');

button.addEventListener('click', onClick)

function onClick(){
  party.classList.toggle('party');
}
