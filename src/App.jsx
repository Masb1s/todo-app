import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([
   { id: 1, text: "Погладити кота" },
   { id: 2, text: "Зробити домашнє завдання" },
   { id: 3, text: "Полити квіти" }
  ]);

  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);

  const addTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    const deleted = tasks.find(t => t.id === id);

    setTasks(tasks.filter(task => task.id !== id));

    setHistory(prev => {
      const updated = [deleted, ...prev];
      return updated.slice(0, 3);
    });
  };

  return (
    <div className="app">
      <h1>Todo App</h1>

      <div className="add-block">
        <input
          type="text"
          placeholder="Нова задача..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Додати</button>
      </div>

      <TodoList items={tasks} onDelete={deleteTask} />

      <div className="history">
        <h3>Останні видалені:</h3>
        <ul>
          {history.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
