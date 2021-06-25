import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';

const Header = ({ logout, setRange, range }) => {
  const [selectedMonth, setSelectedMonth] = useState('selected-range');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    setSelectedMonth('');
    setSelectedWeek('');
    setSelectedDay('');
    switch (range) {
      case 'week':
        setSelectedWeek('selected-range');
        break;
      case 'day':
        setSelectedDay('selected-range');
        break;
      default:
        setSelectedMonth('selected-range');
    }
  }, [range]);

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
          className={`header__range-menu__range-btn left-btn other-${selectedMonth}`}
        >
          <span className={`mobile-${selectedMonth}`}>Month</span>
        </button>
        <button
          type="button"
          onClick={onChange}
          data-range="week"
          className={`header__range-menu__range-btn other-${selectedWeek}`}
        >
          <span className={`mobile-${selectedWeek}`}>Week</span>
        </button>
        <button
          type="button"
          onClick={onChange}
          data-range="day"
          className={`header__range-menu__range-btn right-btn other-${selectedDay}`}
        >
          <span className={`mobile-${selectedDay}`}>Day</span>
        </button>
      </div>
      <div className="header__logout">
        <button type="button" onClick={logout} className="header__logout__btn">
          Log out
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  setRange: PropTypes.func.isRequired,
  range: PropTypes.string.isRequired,
};

export default Header;
