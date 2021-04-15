import React from 'react';
import { FaRocketchat, FaRegUserCircle } from 'react-icons/fa';

import './styles.scss';
import Logo_FO from './Logo_FO.png';
import Meteo from './meteo.png';

export default function Header() {
  return (
    <div className='header'>
      <img 
        className="header__img"
        src={Logo_FO} alt="Logo Family Orgenazer" />
      <img 
        className="header__img"
        src={Meteo} alt="Meteo API" />
      <h1 className='header__date'>Le Jeudi 15/04/2021</h1>
      <h2 className="header__icon"><FaRocketchat /></h2>
      <h2 className="header__icon"><FaRegUserCircle/></h2>
    </div>
  );
}
