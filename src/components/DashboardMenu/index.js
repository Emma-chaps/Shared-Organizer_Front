import React from 'react';
import PropTypes from 'prop-types';
import { format, compareAsc } from 'date-fns';
import { FaUserAlt } from 'react-icons/fa';
import './styles.scss';

const DashboardMenu = ({ setRange, selectedDateValue, setFieldDateValue }) => {
  const onChange = (event) => {
    const value = event.target.dataset.range;
    setRange(value);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setFieldDateValue(event.target.value);
  };

  return (
    <div className="menu">
      <input
        type="date"
        name="selectedDate"
        className="menu__datePicker"
        value={selectedDateValue}
        onChange={handleChange}
      />
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
      <div className="menu__members">
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
      </div>
    </div>
  );
};

DashboardMenu.propTypes = {};

export default DashboardMenu;
