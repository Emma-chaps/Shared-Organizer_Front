import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'src/components/Modal';
import GroupSettings from 'src/containers/pages/GroupSettings';
import { findMember } from 'src/selectors/findMember';
import { FaUserAlt, FaUsers } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

const DashboardMenu = ({
  groupName,
  isAdmin,
  selectedDateValue,
  setFieldDateValue,
  members,
  setFilteredMembers,
  fetchAllWidgets,
}) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayHiddenMembers, setDisplayHiddenMembers] = useState(true);
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1000px)').matches,
  );
  useEffect(() => {
    const handler = (event) => setMatches(event.matches);
    window.matchMedia('(min-width: 1000px)').addListener(handler);
    return () => {
      window.matchMedia('(min-width: 1000px)').removeListener(handler);
    };
  });

  const handleChange = (event) => {
    setFieldDateValue(event.target.value);
    fetchAllWidgets();
  };

  const handleFilter = (event) => {
    const searchedMember = findMember(event.currentTarget.id, members);
    setFilteredMembers([searchedMember]);
  };

  const handleResetFilter = () => {
    setFilteredMembers(members);
  };

  const handleDisplaySettingsModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleToggleModal = () => {
    setDisplayHiddenMembers(!displayHiddenMembers);
  };

  const classes = classNames('member-filter__modal', {
    'hidden-members-modal': displayHiddenMembers,
  });

  const handleCalendar = (date) => {
    console.log(format(date, 'yyyy-MM-dd'));
  };

  return (
    <div className="menu">
      <Calendar onChange={handleCalendar} />
      <input
        type="date"
        name="selectedDate"
        className="menu__datePicker"
        value={selectedDateValue}
        onChange={handleChange}
      />
      <h1 className="group-name">
        <span className="group-name__title">{groupName}</span>
        {isAdmin && (
          <button
            type="button"
            className="group-name__edit"
            onClick={handleDisplaySettingsModal}
          >
            <FiEdit2 />
          </button>
        )}
      </h1>
      {displayModal && (
        <Modal showModal={displayModal} hideModal={handleDisplaySettingsModal}>
          <GroupSettings closeModal={handleDisplaySettingsModal} />
        </Modal>
      )}
      {matches ? (
        <div className="menu__members">
          <button
            type="button"
            onClick={handleResetFilter}
            className="member-filter--all"
          >
            All
          </button>
          {members.map((member) => (
            <div
              // type="button"
              key={member.id}
              id={member.id}
              onClick={handleFilter}
              className="menu__members--btn"
            >
              <span className={`letter icon-container--${member.icon}`}>
                {member.firstname[0]}
              </span>
              <span className="member-firstname">{member.firstname}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="member-filter">
          <button
            type="button"
            className="member-filter__btn"
            onClick={handleToggleModal}
          >
            <FaUsers />
          </button>
          <div className={classes}>
            <button
              type="button"
              onClick={handleResetFilter}
              className="member-filter--all"
            >
              All
            </button>
            {members.map((member) => (
              <button
                type="button"
                key={member.id}
                id={member.id}
                onClick={handleFilter}
                className={`button-modal-filter icon-container--${member.icon}`}
              >
                {member.firstname[0]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DashboardMenu.propTypes = {};

export default DashboardMenu;
