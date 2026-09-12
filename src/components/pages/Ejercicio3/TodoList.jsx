import Button1 from '../../common/Button1';
import List from '../../common/List';
import { useState } from 'react';

const TodoList = () => {
  // --- todos
  const [todos, setList] = useState([]);
  const todosRefreshHandler = () => {
    const newTodo = {
      text: text,
      id: crypto.randomUUID(),
    };
    setList([...todos, newTodo]);
    setText('');
  };

  // --- input
  const [text, setText] = useState('');
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      todosRefreshHandler();
    }
  };

  // --- X button
  const xButtonHandler = (idToRemove) => {
    setList(todos.filter((elem) => elem.id !== idToRemove));
  };

  const displayList = todos.map((elem) => (
    <>
      <Button1
        className="p-1 px-1.5 mr-1 bg-gray-500 leading-none"
        handler={() => xButtonHandler(elem.id)}
      >
        X
      </Button1>
      <span>{elem.text}</span>
    </>
  ));

  return (
    <>
      <input
        value={text}
        onChange={inputHandler}
        onKeyDown={keyDownHandler}
        placeholder="Escribe una tarea"
        type="text"
        className="border px-1"
      />

      <Button1 className="ml-6" handler={todosRefreshHandler}>
        Agregar
      </Button1>

      <List className="list-none" items={displayList} />
    </>
  );
};

export default TodoList;
