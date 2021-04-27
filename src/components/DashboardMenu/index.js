import React from 'react';
import PropTypes from 'prop-types';
import { findMember } from 'src/selectors/findMember';
import { FaUserAlt } from 'react-icons/fa';
import './styles.scss';

const DashboardMenu = ({
  setRange,
  selectedDateValue,
  setFieldDateValue,
  members,
  setFilteredMembers,
}) => {
  const onChange = (event) => {
    const value = event.target.dataset.range;
    setRange(value);
  };

  const handleChange = (event) => {
    setFieldDateValue(event.target.value);
  };

  const handleFilter = (event) => {
    const searchedMember = findMember(event.currentTarget.id, members);
    setFilteredMembers([searchedMember]);
  };

  const handleResetFilter = () => {
    setFilteredMembers(members);
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
        <button type="button" onClick={handleResetFilter}>
          ALL
        </button>
        {members.map((member) => (
          <button
            type="button"
            key={member.id}
            id={member.id}
            onClick={handleFilter}
          >
            <FaUserAlt />
            {member.firstname}
          </button>
        ))}
      </div>
    </div>
  );
};

DashboardMenu.propTypes = {};

export default DashboardMenu;
