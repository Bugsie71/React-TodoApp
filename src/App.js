import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const todoLS = localStorage.getItem("todos");
    return todoLS ? JSON.parse(todoLS) : [];
  });

  useEffect(() => updateLS(), [todos]);

  const updateLS = () => localStorage.setItem("todos", JSON.stringify(todos));

  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000);
    const newTodo = { id, ...todo };
    setTodos([newTodo, ...todos]);
    updateLS();
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
