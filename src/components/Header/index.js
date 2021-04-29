import React from 'react';

import './styles.scss';

export default function Header({ logout, setRange }) {
  const onChange = (event) => {
    const value = event.currentTarget.dataset.range;
    setRange(value);
  };
  return (
    <header className="header">
      <div className="header__main-menu">
        <h1>Shared Organizer</h1>
      </div>
      <div className="menu__ranges">
        <button
          type="button"
          onClick={onChange}
          data-range="month"
          className="item"
        >
          Month
        </button>
        <button
          type="button"
          onClick={onChange}
          data-range="week"
          className="item"
        >
          Week
        </button>
        <button
          type="button"
          onClick={onChange}
          data-range="day"
          className="item"
        >
          Day
        </button>
      </div>
      <div className="header__settings-menu">
        <div onClick={logout} className="disconnect-btn">
          Disconnect
        </div>
      </div>
    </header>
  );
}
