import "./styles.css";
import React, { useState } from "react";

const animalDictionary = {
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐼": "Panda",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🐕": "Dog",
  "🐺": "Wolf"
};

var animalWeKnow = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = animalDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have in our Database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = animalDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Animal Emoji Finder</h1>

      <h3>Find out which animal is it:</h3>

      <input
        id="emoji-input"
        placeholder="Enter Your AniMoji"
        onChange={emojiInputHandler}
      />
      <p id="meaning">{meaning}</p>

      <p id="showing-data">Animal Emoji present in our Database:</p>
      {animalWeKnow.map(function (emoji) {
        return (
          <span
            id="emoji-span"
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "3px,", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
