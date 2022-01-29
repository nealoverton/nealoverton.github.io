import { useEffect } from "react";
import Gallows from "./Gallows";

const Word = (props) => {
  const wordLetters = props.word.split("");

  let incorrectGuesses = 0;
  for (const guess of props.attemptedLetters) {
    if (!wordLetters.includes(guess) && incorrectGuesses < 10) {
      incorrectGuesses++;
    }
  }

  let isSolved = true;

  useEffect(() => {
    if (incorrectGuesses === 10 || isSolved) {
      props.setIsComplete(() => true);
    }
  });

  return (
    <div>
      <div className="word">
        {wordLetters.map((letter, index) => {
          if (props.attemptedLetters.includes(letter)) {
            return <p key={index}> {letter} </p>;
          } else if (letter === "/") {
            return <p key={index}> / </p>;
          } else {
            isSolved = false;
            return <p key={index}> _ </p>;
          }
        })}
      </div>
      <Gallows incorrectGuesses={incorrectGuesses} isSolved={isSolved} />
    </div>
  );
};

export default Word;
