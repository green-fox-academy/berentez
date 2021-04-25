const display = document.querySelector('.display');

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

window.onload = () => {
  loadQuestions();
};
