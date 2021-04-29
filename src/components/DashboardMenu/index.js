import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'src/components/Modal';
import GroupSettings from 'src/containers/pages/GroupSettings';
import { findMember } from 'src/selectors/findMember';
import { FaUserAlt, FaUsers } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';

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

  return (
    <div className="menu">
      <input
        type="date"
        name="selectedDate"
        className="menu__datePicker"
        value={selectedDateValue}
        onChange={handleChange}
      />
      <div>
        <div>{groupName}</div>
        {isAdmin && (
          <div onClick={handleDisplaySettingsModal}>
            <FiEdit2 />
          </div>
        )}
      </div>
      {displayModal && (
        <Modal showModal={displayModal} hideModal={handleDisplaySettingsModal}>
          <GroupSettings closeModal={handleDisplaySettingsModal} />
        </Modal>
      )}
      {matches ? (
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
              {member.firstname[0]}
            </button>
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
