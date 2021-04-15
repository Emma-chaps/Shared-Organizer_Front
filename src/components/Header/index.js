import React from 'react';
import { FaRocketchat, FaRegUserCircle } from 'react-icons/fa';

import './styles.scss';
import Logo_FO from './Logo_FO.png';
import Meteo from './meteo.png';

export default function Header() {
  return (
    <div className="header">
      <img src={Logo_FO} alt="Logo Family Orgenazer" />
      <img src={Meteo} alt="Meteo API" />
      <h1 className="date">Le Jeudi 15/04/2021</h1>
      <h2 className="icon">
        <FaRocketchat />
      </h2>
      <h2 className="icon">
        <FaRegUserCircle />
      </h2>
    </div>
  );
}
