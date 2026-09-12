function deleteChecked(ul: HTMLUListElement): void {
  [...ul.children].forEach((elem) => {
    if ((elem.children[0] as HTMLInputElement).checked) {
      elem.remove();
      return true;
    }
  });
}

function setCheckedAttribute(ul: HTMLUListElement): void {
  const lis = ul.children;
  let checkbox: HTMLInputElement;

  for (let li of lis) {
    checkbox = li.children[0] as HTMLInputElement;

    if (checkbox.checked) {
      checkbox.setAttribute('checked', '');
    } else {
      checkbox.removeAttribute('checked');
    }
  }
}

function saveUl(ul: HTMLUListElement): void {
  setCheckedAttribute(ul);

  let text = ul.innerHTML;
  localStorage.setItem('ul', text);
}

function loadUl(ul: HTMLUListElement): void {
  const savedData = localStorage.getItem('ul');
  if (savedData) {
    ul.innerHTML = savedData;
  }
}

function addEventsOnCheckboxes(ul: HTMLUListElement): void {
  const lis = ul.children;
  let checkbox: HTMLInputElement;

  for (let li of lis) {
    checkbox = li.children[0] as HTMLInputElement;
    checkbox.addEventListener('change', (event: Event) => {
      event.preventDefault();
      saveUl(ul);
    });
  }
}

let ulTodos = document.getElementById('ul-tareas') as HTMLUListElement;
loadUl(ulTodos);
addEventsOnCheckboxes(ulTodos);

const btAdd = document.getElementById('bt-add') as HTMLButtonElement;
const newTodo = document.getElementById(
  'input-nueva-tarea',
) as HTMLInputElement;
const btClean = document.getElementById('bt-limipar') as HTMLButtonElement;

// --- Adding events
const btAddHandler = () => {
  const text = newTodo.value;
  if (text.length) {
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newSpan.innerText = text;

    newLi.append(newCheckBox);
    newLi.append(newSpan);
    ulTodos.append(newLi);
    newTodo.value = '';

    addEventsOnCheckboxes(ulTodos);
    saveUl(ulTodos);
  }
};
btAdd.addEventListener('click', btAddHandler);
newTodo.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    btAddHandler();
  }
});

const btCleanHandler = () => {
  deleteChecked(ulTodos);
  saveUl(ulTodos);
};
btClean.addEventListener('click', btCleanHandler);
