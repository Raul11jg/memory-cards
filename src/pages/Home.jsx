import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || name.trim().length < 2) {
      setError('Añade un nombre válido de 2 letras o más');
      return;
    }
    localStorage.setItem('username', name.trim());
    navigate('/game');
  };

  return (
    <>
      <header className="homeHeader">
        <h1>Memory cards</h1>
      </header>

      <main>
        <h2>Introduce tu nombre</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="inputContainer">
            <FontAwesomeIcon icon={faUser} className="userIcon" />
            <input type="text" placeholder="Nombre" className={`${error ? 'errorName' : ''}`} value={name} onChange={handleInputChange} />
          </div>
          {error && <p className="errorText">Añade un nombre válido de 2 letras o más</p>}
          <button type="submit">Jugar</button>
        </form>
      </main>
    </>
  );
};

export default Home;
