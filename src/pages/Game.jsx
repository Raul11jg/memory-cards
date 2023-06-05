import { useState } from 'react';

const Game = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [hideNumbers, setHideNumbers] = useState(false);
  const [secretNumber, setSecretNumber] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const handlePlay = () => {
    setIsPlaying(true);
    const generatedNumbers = generateNumbers(1, 9, 9);
    setNumbers(generatedNumbers);

    setTimeout(() => {
      setHideNumbers(true);
      setSecretNumber(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    }, 5000);
  };

  const generateNumbers = (min, max, count) => {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
    return uniqueNumbers;
  };

  const selectNumber = (number) => {
    setHideNumbers(false);
    setSelectedNumber(number);
    if (number === secretNumber) {
      console.log('LO ENCONTRASTE');
      setTimeout(() => {
        setSelectedNumber(null);
        handlePlay();
      }, 5000);
    } else {
      console.log('ERROR');
    }
  };

  return (
    <div className="game">
      <h3>Dale a play para jugar</h3>
      {!isPlaying ? (
        <button onClick={handlePlay}>Play</button>
      ) : (
        <div>
          {hideNumbers ? <p>¿Dónde está el número {secretNumber}?</p> : <h3>Memoriza las cartas</h3>}
          <div className="grid">
            {numbers.map((number, index) => (
              <div className="row" key={index}>
                <div
                  className={`cell ${selectedNumber === secretNumber && selectedNumber === number && !hideNumbers ? 'found' : ''}  ${
                    secretNumber && selectedNumber !== secretNumber && selectedNumber === number && !hideNumbers ? 'incorrect' : ''
                  }`}
                  onClick={() => selectNumber(number)}
                >
                  {hideNumbers ? '?' : number}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
