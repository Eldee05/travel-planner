export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        <input
          className="check-box"
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        ></input>

        <span className="num-of-items">{item.quantity}</span>
        <span>{item.description}</span>
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
