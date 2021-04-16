import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FamilyNameForm from 'src/containers/forms/FamilyNameForm';
import FamilySettingsFrom from 'src/containers/forms/FamilySettingsForm';
import Modal from 'src/components/Modal';

const FamilySettings = ({ fetchFamilyData, members }) => {
  const [stateModal, setStateModal] = useState(true);
  useEffect(() => {
    fetchFamilyData();
  }, []);
  const handleModal = () => {
    setStateModal(false);
  };
  console.log(members);
  return (
    <div>
      <h1>Family Settings</h1>
      <FamilyNameForm />
      <hr />
      <h2>Member of family</h2>
      <button type="submit" onClick={handleModal}>
        Add a new member
      </button>
      <Modal hideModal={stateModal}>
        <FamilySettingsFrom />
      </Modal>
      {members.map((member) => (
        <div key={member.id}>
          <span>{member.firstname}</span>
          <span>{member.email}</span>
          <span>Password</span>
          <span>{member.role}</span>
          <span>{member.icon}</span>
        </div>
      ))}
    </div>
  );
};

FamilySettings.propTypes = {};

export default FamilySettings;
