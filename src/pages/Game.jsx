import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cell from '../components/Cell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { DIFFICULTY_VALUES } from '../game-settings';

const Game = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [hideNumbers, setHideNumbers] = useState(false);
  const [secretNumber, setSecretNumber] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [points, setPoints] = useState(0);
  const [difficulty, setDifficulty] = useState('low');

  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  const handlePlay = () => {
    setIsPlaying(true);
    const generatedNumbers = generateNumbers(1, 9, 9);
    setNumbers(generatedNumbers);

    setTimeout(() => {
      setHideNumbers(true);
      setSecretNumber(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    }, getDuration());
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
      setPoints(points + getPointsForDifficulty());
      setTimeout(() => {
        setSelectedNumber(null);
        handlePlay();
      }, 3000);
    } else {
      setTimeout(() => {
        setPoints(0);
        setIsPlaying(false);
        setSelectedNumber(null);
      }, 3000);
    }
  };

  const handleGoBack = () => {
    navigate('/home');
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const getPointsForDifficulty = () => {
    return DIFFICULTY_VALUES[difficulty]?.points || 10;
  };

  const getDuration = () => {
    return DIFFICULTY_VALUES[difficulty]?.duration || 10000;
  };

  return (
    <>
      <header>
        <div className="back-arrow" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="username">{`${username}`}</span>
        </div>
        <p>Points: {points}</p>
        <div>
          <label htmlFor="difficulty">Dificultad:</label>
          <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
            <option value="low">Bajo</option>
            <option value="mid">Medio</option>
            <option value="hard">Alto</option>
          </select>
        </div>
      </header>
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
    </>
  );
};

export default Game;
