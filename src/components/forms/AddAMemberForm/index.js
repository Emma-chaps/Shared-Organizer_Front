/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import FieldPassword from 'src/components/forms/FieldPassword';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const AddAMemberForm = ({
  icon,
  firstname,
  email,
  password,
  role,
  colors,
  addNewMember,
  setIconToNewMember,
  changeField,
  setRoleToNewMember,
  userError,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addNewMember();
  };

  const handleChangeIcon = (event) => {
    const selectedIcon = event.target.value;
    setIconToNewMember(selectedIcon);
  };

  const handleChangeRole = (event) => {
    const selectedRole = event.target.value;
    setRoleToNewMember(selectedRole);
  };

  return (
    <div className="container-form">
      <h3 className="container-form__title">Add Member</h3>
      <form onSubmit={onSubmit} className="member-form">
        <div className="member-form__select">
          <label htmlFor="icon" className="member-form__select__icon">
            Color
          </label>
          <select
            className="form-select"
            name="icon"
            id="icon"
            value={icon}
            onChange={handleChangeIcon}
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
          required={true}
        />
        <Field
          className="settings-input"
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={changeField}
          required={true}
        />
        <FieldPassword
          className="settings-input input-password positioned-parent"
          name="password"
          label="Password"
          value={password}
          onChange={changeField}
          required={true}
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
  icon: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  addNewMember: PropTypes.func.isRequired,
  setIconToNewMember: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  setRoleToNewMember: PropTypes.func.isRequired,
  userError: PropTypes.string,
};

AddAMemberForm.defaultProps = {
  userError: undefined,
};

export default AddAMemberForm;
