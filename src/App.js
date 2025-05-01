import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ConcertList from './pages/ConcertList';

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <nav className="mb-4">
          <Link className="btn btn-outline-primary me-2" to="/">Accueil</Link>
          <Link className="btn btn-outline-success" to="/concerts">Concerts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concerts" element={<ConcertList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
