const display = document.querySelector('.display');
const aOne = document.querySelectorAll('#answer');
const radio = document.querySelectorAll('.radio');
const submit = document.querySelector('#submit');
console.log(radio);

//forms
const question = document.querySelector('#question');

const loadQuestions = () => {
  return fetch('http://localhost:8080/api/questions')
    .then((res) => {
      return res.json();
    })
    .then((response) => displayData(response))
    .catch((error) => console.error('No data ', error));
};

function displayData(data) {
  data.forEach((q) => {
    const div = document.createElement('div');
    const quest = document.createElement('p');
    const del = document.createElement('p');
    quest.textContent = q.question;

    del.textContent = 'delete';
    del.classList.add('del');
    del.onclick = () => {
      deleteQuestion(q.id);
      div.remove();
    };

    div.appendChild(quest);
    div.appendChild(del);
    display.appendChild(div);
  });
}

const deleteQuestion = (id) => {
  return fetch(`http://localhost:8080/api/questions/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.error(error));
};

///// !!!radio  giving back boolean, i need int -> next step!
const addQuestion = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/questions', true);
  xhr.setRequestHeader('Content-type', 'application/json');

  let reqBody = {
    question: question.value,
    answers: [
      {
        answer: answer[0].value,
        is_correct: radio[0].checked,
      },
      {
        answer: answer[1].value,
        is_correct: radio[1].checked,
      },
      {
        answer: answer[2].value,
        is_correct: radio[2].checked,
      },
      {
        answer: answer[3].value,
        is_correct: radio[3].checked,
      },
    ],
  };

  console.log(JSON.stringify(reqBody));
  xhr.send(JSON.stringify(reqBody));
  // xhr.onload = () => {

  // }
};

submit.addEventListener('click', function () {
  addQuestion();
});

window.onload = () => {
  loadQuestions();
};
