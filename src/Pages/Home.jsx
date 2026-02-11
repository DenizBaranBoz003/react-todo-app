import { useState, useEffect } from "react";

import TodoItem from "../components/TodoItem";

function Home() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
});
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  // EKLE
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // SİL
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // GÜNCELLE
  const updateTodo = (id) => {
    const newText = prompt("Yeni görev metni:");
    if (!newText) return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">TODO APP</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Görev gir..."
          className="p-2 text-black rounded"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Ekle
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
