import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FamilyNameForm from 'src/containers/forms/FamilyNameForm';
import FamilySettingsFrom from 'src/containers/forms/FamilySettingsForm';
import Modal from 'src/components/Modal';

const FamilySettings = ({ fetchFamilyData }) => {
  useEffect(() => {
    fetchFamilyData();
  }, []);

  return (
    <div>
      <h1>Family Settings</h1>
      <FamilyNameForm />
      <hr />
      <h2>Member of family</h2>
      <button>Add a new member</button>
      <Modal hideModal={false}>
        <FamilySettingsFrom />
      </Modal>
    </div>
  );
};

FamilySettings.propTypes = {};

export default FamilySettings;
