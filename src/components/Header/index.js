import jwt_decode from 'jwt-decode';
import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';

const Header = ({ logout, setRange, range, isLogged, activeRange }) => {
  const [selectedMonth, setSelectedMonth] = useState('selected-range');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    setSelectedMonth('');
    setSelectedWeek('');
    setSelectedDay('');
    if (range === 'month') {
      setSelectedMonth('selected-range');
    }
    if (range === 'week') {
      setSelectedWeek('selected-range');
    }
    if (range === 'day') {
      setSelectedDay('selected-range');
    }
  }, [range]);

  const onChange = (event) => {
    const value = event.currentTarget.dataset.range;
    setRange(value);
  };

  const { firstname } = jwt_decode(localStorage.getItem('jwtoken'));

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
        {/* <div className="header__logout--firstname">Hi {firstname}</div> */}
      </div>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  setRange: PropTypes.func.isRequired,
  range: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  activeRange: PropTypes.bool.isRequired,
};

Header.defaultProps = {};

export default Header;
