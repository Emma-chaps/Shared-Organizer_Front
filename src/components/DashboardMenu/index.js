import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'src/components/Modal';
import GroupSettings from 'src/containers/pages/GroupSettings';
import { findMember } from 'src/selectors/findMember';
import { FaUserAlt } from 'react-icons/fa';
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
