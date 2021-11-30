import Title from "./components/Title";
import Pokemon from "./components/Pokemon"
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <Pokemon />
      </main>
      <header className="App-header">
        <h1>Welcome to Coddaisseur</h1>
      </header>
    </div>
  );
}

export default App;
