const form = document.getElementById('new-task-form');
const taskList = document.getElementById('tasks');
const listCountElement = document.getElementById('task-count');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('new-task-input');
	const listName = inputField.value;
  if (listName == null || listName === '') return;
	addTask(inputField.value);
	form.reset();
}

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const customCheckbox = document.createElement('span');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(customCheckbox);
	taskLabel.appendChild(taskDescriptionNode);

	customCheckbox.classList.add('custom-checkbox');

	taskContainer.classList.add('task');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}


