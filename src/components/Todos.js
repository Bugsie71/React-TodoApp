import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className='todos-container'>
      {todos.length > 0
        ? todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))
        : "No Todos to Show"}
    </div>
  );
};

export default Todos;
