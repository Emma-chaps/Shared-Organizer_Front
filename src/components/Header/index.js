import React from 'react';

import './styles.scss';

export default function Header({ groupName, logout }) {
  return (
    <header className="header">
      <h1>Shared Organizer</h1>
      <h2>{groupName}</h2>
      <div onClick={logout}>Disconnect</div>
    </header>
  );
}
