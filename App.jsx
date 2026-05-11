import TodoList from "./components/TodoList";

const tasks = [
  { id: 1, text: "Погладити кота" },
  { id: 2, text: "Зробити домашнє завдання" },
  { id: 3, text: "Полити квіти" }
];

function App() {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoList items={tasks} />
    </div>
  );
}

export default App;