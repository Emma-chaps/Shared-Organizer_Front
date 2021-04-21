import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

const GroupSettingsForm = ({
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
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="groupName"
        type="text"
        placeholder="group name"
        value={newGroupName}
        onChange={changeField}
      />
      <button type="submit">Save</button>
    </form>
  );
};

GroupSettingsForm.propTypes = {
  groupName: PropTypes.string,
  changeField: PropTypes.func,
};

GroupSettingsForm.defaultProps = {
  groupName: '',
  changeField: () => {},
};

export default GroupSettingsForm;
