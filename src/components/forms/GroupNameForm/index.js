import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import { AiOutlineCheckCircle } from 'react-icons/ai';

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
    <form onSubmit={handleSubmit} className="input-form">
      <Field
        className="settings-input"
        name="groupName"
        type="text"
        placeholder="group name"
        value={newGroupName}
        onChange={changeField}
        maxLength="30"
      />
      <button type="submit" className="input-form__btn icon-btn">
        <AiOutlineCheckCircle />
      </button>
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
