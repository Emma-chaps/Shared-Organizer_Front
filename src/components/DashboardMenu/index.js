import React from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import './styles.scss';

const DashboardMenu = ({ setRange }) => {
  const onChange = (event) => {
    const value = event.target.dataset.range;
    setRange(value);
  };

  return (
    <div className="menu">
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
