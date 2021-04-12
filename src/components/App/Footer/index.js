import React from 'react';

import './styles.scss';

export default function() {
  return (
    <footer>
      <nav className="navbar">
        <ul>
          <a href="#"><li className="navbar__list">Contact</li></a>
          <a href="#"><li className="navbar__list">About Us</li></a>
        </ul>
      </nav>
    </footer>
  );
}
