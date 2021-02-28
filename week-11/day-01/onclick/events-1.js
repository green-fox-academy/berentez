const wrapper = document.querySelector('div');
console.log(wrapper)

const party = document.createElement('div');
wrapper.appendChild(party);

const button = document.querySelector('button');

button.addEventListener('click', onClick)

function onClick(event){
  party.classList.toggle('party');
}
