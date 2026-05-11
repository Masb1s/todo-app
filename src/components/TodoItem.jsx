function TodoItem({ id, text, onDelete }) {
  return (
    <li className="todo-item">
      {text}
      <button className="delete-btn" onClick={() => onDelete(id)}>
        ×
      </button>
    </li>
  );
}

export default TodoItem;
