import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    navigate('/game');
  };

  return (
    <main>
      <h2>Introduce tu nombre</h2>

      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Nombre" className={`${error ? 'errorName' : ''}`} value={name} onChange={handleInputChange} />
        {error && <p className="errorText">Añade un nombre válido de 2 letras o más</p>}
        <button type="submit">Jugar</button>
      </form>
    </main>
  );
};

export default Home;
