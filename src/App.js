import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <Meme />
      </main>
    </div>
  );
}

export default App;
