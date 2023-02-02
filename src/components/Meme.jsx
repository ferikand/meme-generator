// import Form from "./Form";
import React from "react";
// import ReactDOM from 'react-dom/client';
import memesData from "./memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
          <div onClick={getMemeImage} type="submit" id="submit-btn">
            Get a new meme image 🖼
          </div>
        </form>
      </div>
      <div className="container">
        <div className="meme-container">
          <img src={meme.randomImage} alt="meme" />
          <div className="text-container">
            <h2>text here</h2>
            <h2 className="bottomLine">and here</h2>
          </div>
        </div>
      </div>
    </>
  );
}
