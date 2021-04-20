import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

const FamilySettingsForm = ({
  initialGroupName,
  newGroupName,
  copyGroupName,
  changeField,
  updateGroupName,
  setGroupNameInputState,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    updateGroupName();
    setGroupNameInputState();
  };

  useEffect(() => {
    copyGroupName(initialGroupName);
  }, [initialGroupName]);

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="groupName"
        type="text"
        placeholder="Family name"
        value={newGroupName}
        onChange={changeField}
      />
      <button type="submit">Save</button>
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
