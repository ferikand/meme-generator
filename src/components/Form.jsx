export default function Form() {
  return (
    <div className="container">
      <form action="">
        <div className="textFields">
          <input placeholder="on top" type="text" className="input-top" />
          <input placeholder="on bottom" type="text" className="input-bottom" />
        </div>
        <button type="submit" id="submit-btn">
          Get a new meme image 🖼
        </button>
      </form>
    </div>
  );
}
