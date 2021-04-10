const iLoveCats: HTMLInputElement = document.querySelector('#cat-btn');
const signUp: HTMLInputElement = document.querySelector('#sign-up');
let pet: string = '';
let subscribe: string = '';
const response: HTMLElement = document.querySelector('h2');
const container: HTMLDivElement = document.querySelector('.container');
const radio: NodeListOf<Element> = document.querySelectorAll("input[type = 'radio']");

radio.forEach((btn) => {
  btn.addEventListener('change', (e) => {
    btnAction(e.target);
  });
});

function btnAction(btn) {
  if (btn.name === 'pet') {
    pet = btn.value;
  } else {
    subscribe = btn.value;
    console.log(subscribe);
  }

  handleCatBtn(subscribe);
  handleSignupBtn(pet);

  if (pet === 'Victor' && subscribe === 'no') {
    signUp.disabled = false;
  }
}

function handleCatBtn(value: string) {
  if (value === 'yes') {
    console.log('fut');
    iLoveCats.disabled = false;
  } else {
    iLoveCats.disabled = true;
  }
}

function handleSignupBtn(value: string) {
  if (value === 'Catto' || value === 'Doggo') {
    signUp.disabled = false;
  } else {
    signUp.disabled = true;
  }
}

iLoveCats.addEventListener('click', () => {
  response.innerHTML = '';
  response.innerHTML = "Thank you, you've successfully signed up for cat facts!";
  container.appendChild(response);
});

signUp.addEventListener('click', () => {
  response.innerHTML = '';
  if (pet === 'Victor' && subscribe === 'no') {
    response.innerHTML = 'Sigh, we still added you to the cat facts list! Your welcome!';
    container.appendChild(response);
  } else {
    response.innerHTML = "Thank you, you've successfully signed up!";
    container.appendChild(response);
  }
});
