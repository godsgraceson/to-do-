const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const clearAll = document.getElementById('clear-all');

let todos = JSON.parse(localStorage.getItem('todos') || '[]');

function save() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function render() {
  list.innerHTML = '';

  if (todos.length === 0) {
    list.innerHTML = '<li class="empty">No tasks yet.</li>';
    return;
  }

  todos.forEach((todo, index) => {
    const item = document.createElement('li');
    item.className = `todo-item ${todo.done ? 'done' : ''}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.done;
    checkbox.addEventListener('change', () => {
      todos[index].done = checkbox.checked;
      save();
      render();
    });

    const text = document.createElement('span');
    text.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      save();
      render();
    });

    item.append(checkbox, text, deleteBtn);
    list.appendChild(item);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  todos.push({ text, done: false });
  input.value = '';
  save();
  render();
  input.focus();
});

clearAll.addEventListener('click', () => {
  todos = [];
  save();
  render();
});

render();
