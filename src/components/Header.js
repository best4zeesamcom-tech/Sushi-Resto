import React, { useState} from 'react';
import logo from '../img/logo.png';
import leaf1 from '../img/leaf-branch-4.png';
import leaf2 from '../img/leaf-branch-3.png';
const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
 // Toggle theme function
  const toggleTheme = () => {
    const newDarkTheme = !darkTheme;
    setDarkTheme(newDarkTheme);
    if (newDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'popular', label: 'Popular' },
    { id: 'recently', label: 'Recently' }
  ];
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={logo} alt="Delicious sushi"/> Sushi
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            {navItems.map(item => (
              <li key={item.id} className="nav__item">
                <a href={`/#${item.id}`} 
                  className={`nav__link`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <img src={leaf1}  className="nav__img-1" />
          <img src={leaf2}  className="nav__img-2" />
        </div>
        <div className="nav__buttons">
          <button className="change-theme" id="theme-button" onClick={toggleTheme}>
            <i className={darkTheme ? "ri-sun-line" : "ri-moon-line"}></i>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
