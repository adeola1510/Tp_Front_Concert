import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';
import { BiCard, BiSearch, BiUser } from 'react-icons/bi';

import { ShopContext } from '../ShopContext/ShopContext';
import './Navbar.css';

const Navbar = () => {
  const { searchProducts, setHeroVisible, itemAmount, email } = useContext(ShopContext);
  const [query, setQuery] = useState('');

  // Gestion de l'effet scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.toggle('active', window.scrollY > 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchProducts(value);
  };

  return (
    <header className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">
          <h2>🎵 LogoX</h2>
        </Link>
        <nav className="navbar__menu">
          <Link to="/list" className="navbar__link">
            Liste des Artistes
          </Link>
          <Link to="/ajouter" className="navbar__link">
            Ajouter un Artiste
          </Link>
        </nav>
      </div>

      <div className="navbar__center">
        <div className="navbar__search">
          <BiSearch className="navbar__icon" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            onClick={() => setHeroVisible(false)}
            placeholder="Rechercher un artiste..."
            className="navbar__input"
          />
          <MdCancel onClick={() => setHeroVisible(true)} className="navbar__icon cancel" />
        </div>
      </div>

      <div className="navbar__right">
        <Link to="/cart" className="navbar__cart">
          <BiCard className="navbar__icon" />
          <span className="navbar__cart-count">{itemAmount}</span>
        </Link>
        <div className="navbar__user">
          <BiUser className="navbar__icon" />
          <span>{email}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
