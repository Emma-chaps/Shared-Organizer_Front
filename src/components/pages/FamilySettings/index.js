import React from 'react';
import PropTypes from 'prop-types';
import FamilyNameForm from 'src/components/forms/FamilyNameForm';
import FamilySettingsFrom from 'src/components/forms/FamilySettingsForm';

const FamilySettings = (props) => {
  return (
    <div>
      <h1>Family Settings</h1>
      <FamilyNameForm />
      <hr />
      <h2>Member of family</h2>
      <button>Add a new member</button>
      <FamilySettingsFrom />
    </div>
  );
};

FamilySettings.propTypes = {};

export default FamilySettings;
