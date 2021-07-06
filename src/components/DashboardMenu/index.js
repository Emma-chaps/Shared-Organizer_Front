import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'src/components/Modal';
import GroupSettings from 'src/containers/pages/GroupSettings';
import { findMember } from 'src/selectors/findMember';
import { FaUsers } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { SiGooglecalendar } from 'react-icons/si';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import useOnClickOutside from 'src/hooks/clickOutside';

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
  const [hideHiddenMembers, setHideHiddenMembers] = useState(true);
  const [displayDatepicker, setDisplayDatepicker] = useState(false);
  const yearDate = selectedDateValue.split('-')[0];
  const monthDate = selectedDateValue.split('-')[1];
  const dayDate = selectedDateValue.split('-')[2];
  const formattedDateValue = new Date(yearDate, monthDate - 1, dayDate);
  // const [otherMembers, setOtherMembers] = useState(members);
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1000px)').matches
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

  const removeSelectedClass = (event) => {
    const siblingElements = event.currentTarget.parentNode.children;
    siblingElements.forEach((element) => {
      if (element.className.includes('selected')) {
        element.className = 'menu__members--btn';
      }
    });
  };

  const memberRef = useRef();
  const handleFilter = (event) => {
    if (matches) {
      removeSelectedClass(event);
      event.currentTarget.className = 'menu__members--btn selected';
    }
    if (!matches) {
      setHideHiddenMembers(true);
    }
    const searchedMember = findMember(event.currentTarget.id, members);
    setFilteredMembers([searchedMember]);
  };

  const handleResetFilter = (event) => {
    removeSelectedClass(event);
    setFilteredMembers(members);
  };

  const handleDisplaySettingsModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleToggleModal = () => {
    setHideHiddenMembers(!hideHiddenMembers);
  };

  const classes = classNames('member-filter__modal', {
    'hidden-members-modal': hideHiddenMembers,
  });

  const handleCalendar = (event) => {
    setFieldDateValue(format(event, 'yyyy-MM-dd'));
    fetchAllWidgets();
    setDisplayDatepicker(false);
  };

  const handleDatepickerClick = () => {
    setDisplayDatepicker(!displayDatepicker);
  };

  const calendarRef = useRef();
  useOnClickOutside(calendarRef, () => setDisplayDatepicker(false));
  const memberFilterRef = useRef();
  useOnClickOutside(memberFilterRef, () => setHideHiddenMembers(true));

  return (
    <div className="menu">
      <div className="menu__datePicker" ref={calendarRef}>
        <div className="date-picker-container" onClick={handleDatepickerClick}>
          <SiGooglecalendar className="menu__datePicker--icon" />
          <p>Pick a date</p>
        </div>
        {displayDatepicker && (
          <Calendar
            onChange={handleCalendar}
            value={formattedDateValue}
            onClickMonth={handleCalendar}
            className="menu__datePicker--calendar"
          />
        )}
      </div>
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
              ref={memberRef}
            >
              <span className={`letter color-container--${member.color}`}>
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
          <div className={classes} ref={memberFilterRef}>
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
                className={`button-modal-filter color-container--${member.color}`}
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

DashboardMenu.propTypes = {
  groupName: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  selectedDateValue: PropTypes.string.isRequired,
  setFieldDateValue: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired,
  setFilteredMembers: PropTypes.func.isRequired,
  fetchAllWidgets: PropTypes.func.isRequired,
};

DashboardMenu.defaultProps = {};

export default DashboardMenu;
