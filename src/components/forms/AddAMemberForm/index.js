/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import { FaUserAlt } from 'react-icons/fa';
import { hideModal } from '../../../actions/settings';

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
  hideModal,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addNewMember();
    hideModal();
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
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="icon">
          <select
            name="icon"
            id="icon"
            value={icon}
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
        </label>
        <FaUserAlt className={`icon-container--${icon}`} />
        <Field
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={changeField}
        />
        <Field
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeField}
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={changeField}
        />
        <label htmlFor="role">
          <select
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
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddAMemberForm;
