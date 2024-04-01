let input = document.querySelector('input');
let list = document.querySelector('.task-list');

input.addEventListener('keyup', pressEnter);

function pressEnter(event) {
  if (event.key === 'Enter' && input.value !== '') {
    let task = document.createElement('li');
    task.innerHTML = `
    <span>${input.value}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
    list.appendChild(task);
    input.value = '';
  }
}

list.addEventListener('click', function (event) {
  if (event.target.classList.contains('edit-btn')) {
    let taskText = event.target.previousElementSibling;
    let newText = prompt('Edit task:', taskText.textContent);
    if (newText !== '') {
      taskText.textContent = newText;
    }
  } else if (event.target.classList.contains('delete-btn')) {
      let task = event.target.parentElement;
      task.remove();
    }
});
