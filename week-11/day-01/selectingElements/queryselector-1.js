
//1.
const king = document.querySelector('#b325');
console.log('king:', king);

//2. 
const businessLamp = document.querySelectorAll('.asteroid.big')
for (let i = 0; i < businessLamp.length; i++){
    console.log(businessLamp[i]);
}

//3.
const container = document.querySelector('.container');
const conceitedKing = container.querySelectorAll('.asteroid');
for (let i = 0; i < conceitedKing.length; i++){
    console.log(conceitedKing[i]);
}

//4.

const noBusiness = document.querySelectorAll('div');
for (let i = 0; i < noBusiness.length; i++){
    console.log(noBusiness[i]);
}
