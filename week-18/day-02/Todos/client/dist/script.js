const table = document.querySelector('.table');
const submit = document.querySelector('#submit');
const input = document.querySelector('#input');

//display todos

const displayTodos = () => {
  fetch('http://localhost:3000/api/todo/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((todo) => displayTodo(todo))
    .catch((err) => console.error(err));
};

function displayTodo(todo) {
  todo.forEach((element, i) => {
    const newTodo = document.createElement('div');
    newTodo.className = 'task';
    const text = document.createElement('p');
    text.innerText = element.text;

    if (element.completed === 1) {
      text.className = 'complete';
    }
    newTodo.appendChild(text);
    table.appendChild(newTodo);
    actionButtons(element, newTodo);
  });
}

function actionButtons(todo, task) {
  const action = document.createElement('div');
  action.className = 'action';
  const complete = document.createElement('p');
  const remove = document.createElement('P');
  complete.innerText = 'Complete';
  remove.innerText = 'Remove';
  complete.classList.add('action', 'complete');
  remove.classList.add('action', 'delete');

  complete.onclick = () => {
    completeTodo(todo.id);

    location.reload();
  };

  remove.onclick = () => {
    deleteTodo(todo.id);
    action.remove();
    task.remove();
  };

  action.appendChild(complete);
  action.appendChild(remove);
  table.appendChild(action);
}

window.onload = () => {
  displayTodos();
};

//post todos

const postTodo = (data) => {
  console.log(data);
  fetch('http://localhost:3000/api/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((err) => console.error(err));
};

submit.addEventListener('click', function (e) {
  const data = {
    task: input.value,
  };
  postTodo(data);
  location.reload();
});

const deleteTodo = (id) => {
  return fetch(`http://localhost:3000/api/todo/${id}/delete`, {
    method: 'DELETE',
  }).catch((err) => console.error(err));
};

const completeTodo = (id) => {
  return fetch(`http://localhost:3000/api/todo/${id}/complete`, {
    method: 'PUT',
  }).catch((err) => console.error(err));
};
