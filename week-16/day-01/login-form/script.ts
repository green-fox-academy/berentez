const eye: HTMLElement = document.querySelector('.toggle-password');
const psw: HTMLElement = document.querySelector('#password');

eye.addEventListener('click', function () {
  eye.classList.toggle('fa-eye-slash');
  if (psw.getAttribute('type') === 'password') {
    psw.setAttribute('type', 'text');
  } else {
    psw.setAttribute('type', 'password');
  }
});
