/* eslint-disable react/prop-types */
import './Cell.css';

const Cell = ({ number, selectedNumber, secretNumber, hideNumbers, onClick }) => {
  const isFound = selectedNumber === secretNumber && selectedNumber === number && !hideNumbers;
  const isIncorrect = secretNumber && selectedNumber !== secretNumber && selectedNumber === number && !hideNumbers;

  return (
    <div className={`cell ${isFound ? 'found' : ''} ${isIncorrect ? 'incorrect' : ''}`} onClick={() => onClick(number)}>
      {hideNumbers ? '?' : number}
    </div>
  );
};

export default Cell;
