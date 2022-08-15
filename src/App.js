import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Double Click Todos to Toggle Reminder",
      date: "2022-08-14",
      time: "1:00",
      reminder: true,
    },
    {
      id: 2,
      text: "This is my first React App",
      date: "2022-08-14",
      time: "24:00",
      reminder: false,
    },
  ]);

  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000);
    const newTodo = { id, ...todo };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='app'>
      <Header />
      <Form addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
