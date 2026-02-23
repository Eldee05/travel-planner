export default App;

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
  return <h1> 🌴 Staycation 🧳 </h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for you trip ✈️</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
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
