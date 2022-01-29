const Gallows = (props) => {
  let gallowsImg = props.incorrectGuesses;
  if (props.isSolved && props.incorrectGuesses < 10) {
    gallowsImg = "win";
  }
  return (
    <div className="gallows">
      <img src={require(`../gallows-images/${gallowsImg}.png`)} />
    </div>
  );
};

export default Gallows;
