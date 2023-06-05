import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Game from './pages/Game';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
