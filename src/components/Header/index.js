import React from 'react';
import { logout } from '../../actions/user';

import './styles.scss';

export default function Header({ isLogged, logout }) {
  return (
    <div className="header">
      Header
      {isLogged && <div onClick={logout}>Disconnect</div>}
    </div>
  );
}
