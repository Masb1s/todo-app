import TodoItem from "./TodoItem";

function TodoList({ items }) {
  return (
    <ul>
      {items.map(task => (
        <TodoItem key={task.id} text={task.text} />
      ))}
    </ul>
  );
}

export default TodoList;
