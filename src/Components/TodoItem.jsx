function TodoItem({ todo, deleteTodo, updateTodo }) {
  return (
    <li className="flex justify-between bg-gray-800 p-3 rounded">
      <span>{todo.text}</span>
      <div className="flex gap-2">
        <button
          onClick={() => updateTodo(todo.id)}
          className="bg-yellow-500 px-2 py-1 rounded"
        >
          Güncelle
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-600 px-2 py-1 rounded"
        >
          Sil
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
