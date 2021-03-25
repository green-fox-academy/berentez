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

candyBtn.addEventListener('click', function () {
  candyCounter.innerHTML = (parseInt(candyCounter.innerHTML) + 1 * multiplier).toString();
});
