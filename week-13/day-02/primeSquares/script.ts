const container: HTMLElement = document.querySelector('section');

// generate 100 divs to the <section> element and add index numbers to it as the element's textContent
for (let i: number = 2; i < 101; i++) {
  const newDiv: HTMLDivElement = document.createElement('div');
  newDiv.textContent = i.toString();
  container.appendChild(newDiv);
}

//Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll('div');

const primeValidator = (box: HTMLDivElement) => {
  const number = parseInt(box.innerText);
  for (let i: number = 2; i < number; i++) {
    if (number % i === 0) {
      return box.classList.add('not-prime');
    }
  }

  return box.classList.add('prime');
};

// Create a timer that keeps calling the prime validator function until it reaches the last element

let index = 0;
let interval = setInterval(() => {
  primeValidator(boxes[index]);
  index++;
  if (index >= 100) {
    return clearInterval(interval);
  }
}, 100);
