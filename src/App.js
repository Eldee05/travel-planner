export default App;

const initialItems = [
  { id: 1, description: "Passports ", quantity: 2, packed: false },
  { id: 2, description: "Socks ", quantity: 12, packed: true },
  { id: 3, description: "Tickets ", quantity: 2, packed: false },
  { id: 4, description: "charger ", quantity: 1, packed: true },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Header() {
  return <h1>🏖️ Staycation 🧳 </h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for you trip ✈️</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}></option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      {" "}
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        {" "}
        You have x items on your list 📋, and you already packed x (x%) 👜
      </em>
    </footer>
  );
}
