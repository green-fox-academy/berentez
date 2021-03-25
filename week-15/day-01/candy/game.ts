// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const candyBtn: HTMLButtonElement = document.querySelector('.create-candies');
const candyCounter: HTMLDivElement = document.querySelector('.candies');
const multiplier: number = 1;

function refreshNum(): number {
  return parseInt(candyCounter.innerHTML);
}

//create candy
candyBtn.addEventListener('click', function () {
  candyCounter.innerHTML = (refreshNum() + 1 * multiplier).toString();
});

//create lollyops
const buyLollyBtn: HTMLButtonElement = document.querySelector('.buy-lollypops');
const lollypop: HTMLElement = document.querySelector('.lollypops');

buyLollyBtn.addEventListener('click', function () {
  if (refreshNum() >= 100) {
    lollypop.innerHTML += '🍭';
    candyCounter.innerHTML = (refreshNum() - 100).toString();
  }
});

window.onload = () => {
  setInterval(function () {
    if (lollypop.innerHTML.length >= 20) {
      candyCounter.innerHTML = (refreshNum() + Math.floor(lollypop.innerHTML.length / 20) * multiplier).toString();
      console.log('fut');
    }
  }, 1000);
};
