/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import FieldPassword from 'src/components/forms/FieldPassword';

const AddAMemberForm = ({ colors, addNewMember, userError }) => {
  const [color, setColor] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const dataUser = {
    color,
    firstname,
    email,
    password,
    role,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMember(dataUser);
  };

  const handleChangeColor = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
  };

  const handleChangeRole = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
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
          onChange={setFirstname}
          required
        />
        <Field
          className="settings-input"
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={setEmail}
          required
        />
        <FieldPassword
          className="settings-input input-password positioned-parent"
          name="password"
          label="Password"
          value={password}
          onChange={setPassword}
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
  colors: PropTypes.array.isRequired,
  addNewMember: PropTypes.func.isRequired,
  userError: PropTypes.string,
};

AddAMemberForm.defaultProps = {
  userError: undefined,
};

export default AddAMemberForm;
