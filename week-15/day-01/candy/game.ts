// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const candyBtn: HTMLButtonElement = document.querySelector('.create-candies');
const candyCounter: HTMLDivElement = document.querySelector('.candies');
let multiplier: number = 1;

function refreshNum(): number {
  return parseInt(candyCounter.innerHTML);
}

//create candy
candyBtn.addEventListener('click', function addCandy(): void {
  candyCounter.innerHTML = (refreshNum() + 1 * multiplier).toString();
  if (refreshNum() >= 10000) {
    candyBtn.removeEventListener('click', addCandy);
  }
});

//create lollyops
const buyLollyBtn: HTMLButtonElement = document.querySelector('.buy-lollypops');
const lollypop: HTMLElement = document.querySelector('.lollypops');

buyLollyBtn.addEventListener('click', function addLolly(): void {
  if (refreshNum() >= 10000) {
    buyLollyBtn.removeEventListener('click', addLolly);
  }
  if (refreshNum() >= 100 && refreshNum() < 10000) {
    lollypop.innerHTML += '🍭';
    candyCounter.innerHTML = (refreshNum() - 100).toString();
  }
});

//candy rain button
const candyRainBtn: HTMLButtonElement = document.querySelector('.candy-machine');
candyRainBtn.addEventListener('click', function rainCandy(): void {
  console.log(refreshNum());
  if (refreshNum() >= 10000) {
    candyRainBtn.removeEventListener('click', rainCandy);
  }
  if (refreshNum() >= 1000) {
    multiplier = multiplier * 10;
    candyCounter.innerHTML = (refreshNum() - 1000).toString();
  }
});

//candies / second
const efficiency: HTMLElement = document.querySelector('.speed');
let clicks: number = 0;
let sec: number = 0;

function clicksPerSecond() {
  candyBtn.onclick = () => {
    clicks += 1 * multiplier;
  };
  return clicks / sec;
}

// lollypops production
window.onload = () => {
  const interval = setInterval(function () {
    sec++;
    efficiency.innerHTML = (clicksPerSecond() + Math.floor(lollypop.innerHTML.length / 20)).toString();
    if (lollypop.innerHTML.length >= 20) {
      candyCounter.innerHTML = (refreshNum() + Math.floor(lollypop.innerHTML.length / 20) * multiplier).toString();
    }
    gameOver(interval);
  }, 1000);
};

//endgame
function gameOver(interval: NodeJS.Timeout): void {
  if (refreshNum() >= 10000) {
    const win = document.createElement('h1');
    const container = document.querySelector('.game-over');
    win.setAttribute('style', 'color: green');
    win.innerHTML = 'WIN!!!';
    container.appendChild(win);
    clearInterval(interval);
  }
}
