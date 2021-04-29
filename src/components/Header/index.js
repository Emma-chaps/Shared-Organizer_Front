import React, { useState } from 'react';

export default function Header({ logout, setRange }) {
  const [selectedMonth, setSelectedMonth] = useState('selected-range');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const onChange = (event) => {
    const value = event.currentTarget.dataset.range;
    setRange(value);
    setSelectedMonth('');
    setSelectedWeek('');
    setSelectedDay('');
    if (value === 'month') {
      setSelectedMonth('selected-range');
    }
    if (value === 'week') {
      setSelectedWeek('selected-range');
    }
    if (value === 'day') {
      setSelectedDay('selected-range');
    }
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
}
