const Keys = (props) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const handleButtonPress = (letter) => {
    props.setAttemptedLetters((currentAttemptedLetters) => {
      if (currentAttemptedLetters.includes(letter) || props.isComplete) {
        return currentAttemptedLetters;
      } else {
        return [...currentAttemptedLetters, letter];
      }
    });
  };

  return (
    <div className="keyboard">
      {alphabet.map((letter) => {
        return (
          <button
            key={letter}
            onClick={() => {
              handleButtonPress(letter);
            }}
            className={
              !props.isComplete && props.attemptedLetters.includes(letter)
                ? "exhausted"
                : ""
            }
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keys;
