import React from 'react';

import './styles.scss';

export default function Header({ islogged }) {
  return (
    <div className="header">
      Header
      {islogged && <div>Disconnect</div>}
    </div>
  );
}
