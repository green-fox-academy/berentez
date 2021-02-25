//1

const pharagraph = document.querySelectorAll('p');
const animals = document.querySelector('.animal');



for (let i = 0; i < pharagraph.length; i++ ){
    pharagraph[i].innerHTML = pharagraph[i].innerHTML + ' ' + pharagraph[pharagraph.length - 1].innerHTML;
    console.log(pharagraph[i]);
}

