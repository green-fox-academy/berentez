// '// Write the image's url to the console.

const image = document.querySelector('img');
console.log('original image: ', image.getAttribute('src'));

// Replace the image with a picture of your favorite animal.

image.setAttribute('src', 'https://nlc.p3k.hu/data/cikk/20/197229/5.jpg');

// Make the link point to the Green Fox Academy website.

const website = document.querySelector('a');
website.setAttribute('href', 'https://www.greenfoxacademy.com')

// Disable the second button.
const button = document.getElementsByClassName('this-one')[0];
button.disabled = true;

// Replace its text with 'Don't click me!'.
button.textContent = 'Don\'t click me!';
