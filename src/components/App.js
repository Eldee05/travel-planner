import { useState } from "react";
import Header from "./header";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

/*const initialItems = [
  { id: 1, description: "Passports ", quantity: 2, packed: false },
  { id: 2, description: "Socks ", quantity: 12, packed: true },
  { id: 3, description: "Tickets ", quantity: 2, packed: false },
  { id: 4, description: "charger ", quantity: 1, packed: true },
];*/

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function ClearList() {
    const confirmed = window.confirm(
      "Are you sure? clicking ok will clear all selected list",
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={ClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
