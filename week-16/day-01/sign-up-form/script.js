const psw = document.querySelector('#psw');
const repsw = document.querySelector('#re-psw');

repsw.addEventListener('keyup', () => {
  if (psw.value !== repsw.value) {
    repsw.setCustomValidity("Passwords don't match!");
  } else {
    repsw.setCustomValidity('');
  }
});
