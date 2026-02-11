import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;

