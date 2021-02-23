

// Add an item that says 'The Green Fox' to the asteroid list.
const asteroids = document.querySelector('ul.asteroids');

const newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
asteroids.appendChild(newAsteroid);

// Add an item that says 'The Lamplighter' to the asteroid list.

const lampAsteroid = document.createElement('li');
lampAsteroid.textContent = 'The Lamplighter';
asteroids.appendChild(lampAsteroid);

// Add a heading saying 'I can add elements to the DOM!' to the .container.

const container = document.querySelector('.container');
const heading = document.createElement('h2');
heading.textContent = 'I can add elements to the DOM!'
container.appendChild(heading)

// Add an image, any image, to the container.
const image = document.createElement('img');
image.setAttribute('src', 'https://i.pinimg.com/originals/16/f2/fd/16f2fdda398a253e580fef62af754c47.jpg');
container.appendChild(image);