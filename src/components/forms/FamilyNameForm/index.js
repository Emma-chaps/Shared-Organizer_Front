import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

const FamilySettingsForm = ({ groupName, changeField }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="groupName"
        type="text"
        placeholder="Family name"
        value={groupName}
        onChange={changeField}
      />
      <button>Save</button>
    </form>
  );
};

FamilySettingsForm.propTypes = {
  groupName: PropTypes.string,
  changeField: PropTypes.func,
};

FamilySettingsForm.defaultProps = {
  groupName: '',
  changeField: () => {},
};

export default FamilySettingsForm;
