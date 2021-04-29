import React from 'react';

import './styles.scss';

export default function Header({ logout, setRange }) {
  const onChange = (event) => {
    const value = event.currentTarget.dataset.range;
    setRange(value);
  };
  return (
    <header className="header">
      <h1 className="header__logo">SO.</h1>
      <div className="header__range-menu">
        <button
          type="button"
          onClick={onChange}
          data-range="month"
          className="header__range-menu__range-btn left-btn"
        >
          <span>Month</span>
        </button>
        <button
          type="button"
          onClick={onChange}
          data-range="week"
          className="header__range-menu__range-btn"
        >
          <span>Week</span>
        </button>
        <button
          type="button"
          onClick={onChange}
          data-range="day"
          className="header__range-menu__range-btn right-btn"
        >
          <span className="selected-range">Day</span>
        </button>
      </div>
      <div className="header__logout">
        <button type="button" onClick={logout} className="header__logout__btn">
          Log out
        </button>
      </div>
    </header>
  );
}
