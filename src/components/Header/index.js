import React from 'react';
import { FaRocketchat, FaRegUserCircle } from 'react-icons/fa';

import './styles.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__icon">
        <FaRocketchat />
      </div>
      <div className="header__icon">
        <FaRegUserCircle />
      </div>
    </div>
  );
}
