import { useState } from 'react';
import Cell from '../components/Cell';

const Game = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [hideNumbers, setHideNumbers] = useState(false);
  const [secretNumber, setSecretNumber] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);

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
    if (!hideNumbers) return;

    setHideNumbers(false);
    setSelectedNumber(number);
    if (number === secretNumber) {
      setTimeout(() => {
        setSelectedNumber(null);
        handlePlay();
      }, 3000);
    } else {
      setTimeout(() => {
        setIsPlaying(false);
        setSelectedNumber(null);
      }, 3000);
    }
  };

  return (
    <main className="game">
      {!isPlaying ? (
        <>
          <h3>Dale a play para jugar</h3>
          <button onClick={handlePlay}>Play</button>
        </>
      ) : (
        <section>
          {hideNumbers ? <h3>¿Dónde está el número {secretNumber}?</h3> : <h3>Memoriza las cartas</h3>}

          <div className="grid">
            {numbers.map((number, index) => (
              <div className="row" key={index}>
                <Cell number={number} selectedNumber={selectedNumber} secretNumber={secretNumber} hideNumbers={hideNumbers} onClick={selectNumber} />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Game;
