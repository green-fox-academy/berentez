// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

const pharagraph = document.querySelectorAll('p');

if (pharagraph[3].classList.contains('dolphin')){
    pharagraph[0].textContent = 'pear';
    pharagraph[0].setAttribute('class', 'pear');
}

// If the first p has an 'apple' class, replace cat's content with 'dog'

if (pharagraph[0].classList.contains('apple')){
    pharagraph[2].textContent = 'dog';
    pharagraph[2].setAttribute('class', 'doggo');
}

// Make apple red by adding a .red class

const apple = document.querySelector('.apple');
apple.classList.add('red')

// Make balloon less balloon-like (change its shape)

const balloon = document.querySelector('.balloon');
balloon.style.borderRadius = '10%'