
//1.
const king = document.querySelector('#b325');
console.log('king:', king);

//2. 
const businessman = document.querySelector('p');
//didn't work with querySelectorAll()
const lamplighter = document.getElementsByClassName("asteroid b329 big");
businessman.setAttribute("class", 'big asteroid');
lamplighter[0].setAttribute('id', 'b329');

//making the array
const businessLamp = [];
businessLamp.push(lamplighter[0]);
businessLamp.push(businessman);
//printing
for (let i = 0; i < businessLamp.length; i++){
    console.log(businessLamp[i]);
}

