// import Form from "./Form";
import React from "react";
// import ReactDOM from 'react-dom/client';
import memesData from "./memesData";

export default function Meme() {
  let [imgUrl, setImgUrl] = React.useState("./images/memeimg.png");

  function useNewImage() {
    const memeData = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memeData.length);
    setImgUrl((prevState) => memeData[randomIndex].url);
  }

  return (
    <>
      <div className="container">
        <form action="">
          <div className="textFields">
            <input placeholder="shut up" type="text" className="input-top" />
            <input
              placeholder="and take my money"
              type="text"
              className="input-bottom"
            />
          </div>
          <div onClick={useNewImage} type="submit" id="submit-btn">
            Get a new meme image 🖼
          </div>
        </form>
      </div>
      <div className="container">
        <div className="meme-container">
          <img src={imgUrl} alt="meme" />
          <div className="text-container">
            <h2>text here</h2>
            <h2 className="bottomLine">and here</h2>
          </div>
        </div>
      </div>
    </>
  );
}
