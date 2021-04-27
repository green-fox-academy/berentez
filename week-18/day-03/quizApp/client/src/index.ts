const btn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
let quest: HTMLElement = document.querySelector('.question');
const score: HTMLElement = document.querySelector('span');
let questionId = 1;
let questList = [];

//Getting random question
/////////////////////////////////////////////////////////

// function getQuestionIdList(): number[] {
//   const list: number[] = [];

//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://localhost:8080/api/questions', true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send();

//   xhr.onload = () => {
//     const question = JSON.parse(xhr.responseText);
//     question.forEach((value: any) => {
//       list.push(value.id);
//     });
//     console.log(list);
//   };

//   return list;
// }

function getQuestionIdList() {
  fetch('http://localhost:8080/api/questions')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.forEach((element) => {
        questList.push(element.id);
      });
    });
}

getQuestionIdList();
console.log(questList.length);

// function getRandomQuestion() {
//   const questIdList: number[] = getQuestionIdList();
//   console.log('questNUM', questIdList.length);
//   return questIdList[Math.floor(Math.random() * questIdList.length)];
// }

getQuestionIdList();

/////////////////////////////////////////////////////////
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
      btn[index].setAttribute('style', 'background-color: rgb(97, 152, 100)');
      score.innerText = (parseInt(score.innerText) + 1).toString();
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
