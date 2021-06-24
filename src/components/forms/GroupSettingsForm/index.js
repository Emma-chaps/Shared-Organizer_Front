import React, { useEffect } from 'react';
import Field from 'src/components/forms/Field';
import PropTypes from 'prop-types';

const GroupSettingsFrom = ({
  member,
  firstname,
  email,
  role,
  color,
  changeField,
  onSubmit,
  onClose,
  setSelectedColor,
  setSelectedRole,
  colors,
  copyMember,
  setUsableColors,
  userError,
}) => {
  useEffect(() => {
    copyMember(member);
    setUsableColors();
  }, [member]);

  const handleChangeColor = (event) => {
    const selectedColor = event.target.value;
    setSelectedColor(selectedColor);
  };

  const handleChangeRole = (event) => {
    const selectedRole = event.target.value;
    setSelectedRole(selectedRole);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="member-form">
        <div className="member-form__select">
          <label htmlFor="color" className="member-form__select__icon">
            Color
          </label>
          <select
            className="form-select"
            name="color"
            id="color"
            value={color}
            onChange={handleChangeColor}
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
        {userError && (
          <div className="errors__message--settings">*{userError}</div>
        )}
      </form>
    </>
  );
};

GroupSettingsFrom.propTypes = {
  member: PropTypes.object,
  firstname: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.number.isRequired,
  color: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  copyMember: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
  setSelectedRole: PropTypes.func.isRequired,
  colors: PropTypes.array,
  setUsableColors: PropTypes.func.isRequired,
  userError: PropTypes.string.isRequired,
};

GroupSettingsFrom.defaultProps = {
  member: {},
  firstname: '',
  email: '',
  color: '',
  colors: [],
};

export default GroupSettingsFrom;
