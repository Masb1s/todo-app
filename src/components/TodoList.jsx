import TodoItem from "./TodoItem";

function TodoList({ items, onDelete }) {
  return (
    <ul>
      {items.map(task => (
        <TodoItem
          key={task.id}
          id={task.id}
          text={task.text}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
