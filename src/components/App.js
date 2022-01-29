import { useState } from "react";
import "./App.css";
import Keys from "./Keys";
import Word from "./Word";
const { generatePhrase } = require("../utils/phraseGenerator");

function App() {
  const [attemptedLetters, setAttemptedLetters] = useState([]);
  const [word, setWord] = useState("NEVER/GONNA/GIVE/YOU/UP");
  const [isComplete, setIsComplete] = useState(false);
  const [category, setCategory] = useState("Song Lyric");

  const startNewGame = () => {
    const { phrase, category } = generatePhrase();
    setCategory(category);
    setWord(phrase);
    setAttemptedLetters([]);
    setIsComplete(false);
  };

  const wordLetters = word.split("");

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={startNewGame} className="new-game-button">
          New Game
        </button>
        <p>Hangman</p>
        <div className="help">
          <img
            src={require("../help.png")}
            alt="Help Clip Art - Help Clipart @clipartmax.com"
          />
          <span className="help-text">
            Welcome to Hangman! Guess the hidden phrase by pressing the letter
            buttons below. Beware though, ten wrong guess and you're a goner!
          </span>
        </div>
      </header>
      <p className="category">Category: {category}</p>
      <Word
        attemptedLetters={attemptedLetters}
        word={word}
        setIsComplete={setIsComplete}
        isComplete={isComplete}
      />
      <Keys
        attemptedLetters={attemptedLetters}
        setAttemptedLetters={setAttemptedLetters}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        wordLetters={wordLetters}
      />
    </div>
  );
}

export default App;
