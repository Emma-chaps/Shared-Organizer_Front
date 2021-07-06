/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import FieldPassword from 'src/components/forms/FieldPassword';

const AddAMemberForm = ({
  color,
  firstname,
  email,
  password,
  role,
  colors,
  addNewMember,
  setColorToNewMember,
  changeField,
  setRoleToNewMember,
  userError,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMember();
  };

  const handleChangeColor = (event) => {
    const selectedColor = event.target.value;
    setColorToNewMember(selectedColor);
  };

  const handleChangeRole = (event) => {
    const selectedRole = event.target.value;
    setRoleToNewMember(selectedRole);
  };

  return (
    <div className="container-form">
      <h3 className="container-form__title">Add Member</h3>
      <form onSubmit={handleSubmit} className="member-form">
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
            <option value="">Select a color</option>
            {colors.map(({ name, value }) => (
              <option value={name} key={name}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <Field
          className="settings-input"
          name="firstname"
          type="text"
          label="First name"
          value={firstname}
          onChange={changeField}
          required
        />
        <Field
          className="settings-input"
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={changeField}
          required
        />
        <FieldPassword
          className="settings-input input-password positioned-parent"
          name="password"
          label="Password"
          value={password}
          onChange={changeField}
          required
        />
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
            <option value="">Select a role</option>
            <option value="2">Editor</option>
            <option value="1">Visitor</option>
          </select>
        </div>
        <button type="submit" className="classic-btn">
          Save
        </button>
        {userError && (
          <div className="errors__message--settings">*{userError}</div>
        )}
      </form>
    </div>
  );
};

AddAMemberForm.propTypes = {
  color: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  addNewMember: PropTypes.func.isRequired,
  setColorToNewMember: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  setRoleToNewMember: PropTypes.func.isRequired,
  userError: PropTypes.string,
};

AddAMemberForm.defaultProps = {
  userError: undefined,
};

export default AddAMemberForm;
