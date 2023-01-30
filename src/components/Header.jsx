import logo from "../images/icons/Troll Face.png";
export default function Header() {
  return (
    <header className="App-header">
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </header>
  );
}
