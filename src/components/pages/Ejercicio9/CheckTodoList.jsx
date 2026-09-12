import Button1 from '../../common/Button1';
import List from '../../common/List';
import { useState } from 'react';

const CheckTodoList = () => {
  const loadList = () => {
    const str = localStorage.getItem('todoList');
    if (str) {
      return JSON.parse(str);
    }
    return [];
  };

  const saveList = (tdList) => {
    const str = JSON.stringify(tdList);
    localStorage.setItem('todoList', str);
  };

  const [todoList, setTodoList] = useState(loadList);
  const [inputText, setInputText] = useState('');

  const addBtnHandler = () => {
    if (inputText.length) {
      const newTodo = {
        checked: false,
        text: inputText,
        id: crypto.randomUUID(),
      };
      const auxList = [...todoList, newTodo];
      setTodoList(auxList);
      setInputText('');
      saveList(auxList);
    }
  };

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      addBtnHandler();
    }
  };

  const cleanBtnHandler = () => {
    const auxList = todoList.filter((todo) => !todo.checked);
    setTodoList(auxList);
    saveList(auxList);
  };

  const checkHandler = (id) => {
    setTodoList(
      todoList.map((elem) => {
        if (elem.id === id) {
          return { ...elem, checked: !elem.checked };
        } else {
          return elem;
        }
      }),
    );
  };

  const UlistItems = todoList.map((elem) => {
    return (
      <>
        <input
          onChange={() => checkHandler(elem.id)}
          className="mr-1"
          type="checkbox"
          checked={elem.checked}
        />
        {elem.text}
      </>
    );
  });

  return (
    <>
      <input
        onChange={inputChangeHandler}
        onKeyDown={keyDownHandler}
        type="text"
        className="border mr-5"
        value={inputText}
      />
      <Button1 handler={addBtnHandler}>Agregar</Button1>
      <List className="list-none" items={UlistItems} />
      <Button1 handler={cleanBtnHandler}>Limpiar tareas completadas</Button1>
    </>
  );
};

export default CheckTodoList;
