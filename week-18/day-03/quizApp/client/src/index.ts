const btn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
let quest: HTMLElement = document.querySelector('.question');
const score: HTMLElement = document.querySelector('span');
let questionId = 1;

//Getting current question
/////////////////////////////////////////////////////////

// function getQuestionIdList() {
//   let idList: number[] = [];
//   return fetch('http://localhost:8080/api/questions')
//     .then((res) => {
//       return res.json();
//     })
//     .then((response) =>
//       response.forEach((value: any) => {
//         idList.push(parseInt(value.id));
//       })
//     );
// }

// const list: number[] = getQuestionIdList();

// const index: number = Math.floor(Math.random() * list.length);
// const question = list[index];
// console.log('question number ', question);

function getQuestion() {
  const xhr: XMLHttpRequest = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:8080/api/game', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('id', `${questionId}`);
  xhr.send();

  xhr.onload = () => {
    const question = JSON.parse(xhr.responseText);
    displayQuestion(question);
  };
}

// function getQuestion() {
//   return fetch('http://localhost:8080/api/game/', {
//     headers: {
//       id: `${randomNumber()}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((response) => displayQuestion(response.value.question));
// }

// function randomNumber() {
//   const xhr: XMLHttpRequest = new XMLHttpRequest();

//   xhr.open('GET', 'http://localhost:8080/api/count', true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send();

//   xhr.onload = () => {
//     const count = JSON.parse(xhr.responseText)[0].questions;
//     randomize(count);
//   };
// }

// function randomize(number: number) {
//   const randomNum = Math.floor(Math.random() * number);
//   return randomNum;
// }

//--cant find type for question
function displayQuestion(question: any): void {
  quest.innerHTML = question.question;
  for (let i: number = 0; i < 4; i++) {
    btn[i].innerHTML = question.answers[i].answer;
    btn[i].classList.add(question.answers[i].id);
  }
}

//checking answer
function checkButton() {
  btn.forEach((value, i) => {
    value.addEventListener('click', function () {
      checkResult(i);
    });
  });
}

const checkResult = (index: number) => {
  const xhr: XMLHttpRequest = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:8080/api/game', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('id', `${questionId}`);
  xhr.send();

  xhr.onload = () => {
    const result = JSON.parse(xhr.responseText);
    if (result.answers[index].is_correct === 1) {
      btn[index].setAttribute('style', 'background-color: green');
      score.innerText = (parseInt(score.innerText) + 1).toString();
      console.log('fut');
    } else {
      btn[index].setAttribute('style', 'background-color: red');
    }
    questionId++;
    setTimeout(clearButtons, 2800);
    setTimeout(getQuestion, 3000);
  };
};

function clearButtons() {
  btn.forEach((value) => {
    value.className = '';
    value.setAttribute('style', 'background-color :');
  });
}

window.onload = () => {
  getQuestion();
  checkButton();
};
