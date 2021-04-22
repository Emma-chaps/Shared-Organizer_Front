import React from 'react';

import './styles.scss';

export default function Header({ logged }) {
  return (
    <div className="header">
      Header
      {logged && <div>Disconnect</div>}
    </div>
  );
}
