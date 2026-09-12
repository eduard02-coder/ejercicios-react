import Button1 from '../../common/Button1';
import List from '../../common/List';
import { useState } from 'react';

const CheckTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState('');

  const addBtnHandler = () => {
    if (inputText.length) {
      const checkHandler = (e) => {
        newTodo.checked = e.target.checked;
        console.log(UlistItems);
      };

      const newTodo = {
        checked: false,
        text: inputText,
        handler: checkHandler,
      };
      setTodoList([...todoList, newTodo]);
      setInputText('');
    }
  };

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const cleanBtnHandler = () => {
    setTodoList(todoList.filter((todo) => !todo.checked));
  };

  const UlistItems = todoList.map((elem) => {
    return (
      <>
        <input onChange={elem.handler} className="mr-1" type="checkbox" />
        {elem.text}
      </>
    );
  });

  return (
    <>
      <input
        onChange={inputChangeHandler}
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
