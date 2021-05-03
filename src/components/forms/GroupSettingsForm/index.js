import React, { useEffect } from 'react';
import Field from 'src/components/forms/Field';
import PropTypes from 'prop-types';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const GroupSettingsFrom = ({
  member,
  firstname,
  email,
  role,
  color,
  changeField,
  onSubmit,
  onClose,
  setSelectedIcon,
  setSelectedRole,
  colors,
  copyMember,
  setUsableColors,
}) => {
  useEffect(() => {
    copyMember(member);
    setUsableColors();
  }, [member]);

  const handleChangeIcon = (event) => {
    const selectedIcon = event.target.value;
    setSelectedIcon(selectedIcon);
  };

  const handleChangeRole = (event) => {
    const selectedRole = event.target.value;
    setSelectedRole(selectedRole);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="member-form">
        <div className="member-form__select">
          <label htmlFor="icon" className="member-form__select__icon">
            Color
          </label>
          <select
            className="form-select"
            name="icon"
            id="icon"
            value={color}
            onChange={handleChangeIcon}
            required
          >
            <option value="">Choose a color</option>
            {colors.map(({ name, value }) => (
              <option value={name} key={name}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <Field
          className="settings-input"
          label="firstname"
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={changeField}
        />
        <Field
          className="settings-input"
          label="email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeField}
        />
        {role === 3 ? (
          <div className="member-data">Administrator</div>
        ) : (
          <div className="member-form__select">
            <label htmlFor="role" className="member-form__select__icon">
              Role
            </label>
            <select
              className="form-select"
              name="role"
              id="role"
              value={role}
              onChange={handleChangeRole}
              required
            >
              <option value="">Choose a role</option>
              <option value="2">Editor</option>
              <option value="1">Visitor</option>
            </select>
          </div>
        )}
        <div className="member-form__btns">
          <button type="submit" className="icon-btn-edit-member--save">
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="icon-btn-edit-member--cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
GroupSettingsFrom.propTypes = {
  member: PropTypes.object,
  firstname: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.number,
  color: PropTypes.string,
  changeField: PropTypes.func,
  copyMember: PropTypes.func,
};

GroupSettingsFrom.defaultProps = {
  member: {},
  firstname: '',
  email: '',
  role: 0,
  color: '',
  changeField: () => {},
  copyMember: () => {},
  updateMember: () => {},
  assignMemberToCloseInputView: () => {},
};

export default GroupSettingsFrom;
