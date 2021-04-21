import React, { useEffect } from 'react';
import Field from 'src/components/forms/Field';
import PropTypes from 'prop-types';

const GroupSettingsFrom = ({
  member,
  firstname,
  email,
  password,
  role,
  icon,
  changeField,
  copyMember,
  onSubmit,
  setSelectedIcon,
  setSelectedRole,
}) => {
  useEffect(() => {
    copyMember(member);
  }, [member]);

  const handleChangeColorIcon = (event) => {
    const selectedIcon = event.target.value;
    console.log(selectedIcon);
    setSelectedIcon(selectedIcon);
  };

  const handleChangeRole = (event) => {
    const selectedRole = event.target.value;
    console.log(selectedRole);
    setSelectedRole(selectedRole);
  };

  return (
    <form onSubmit={onSubmit}>
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
        <select name="role" id="role" value={role} onChange={handleChangeRole}>
          <option value="">Choose a role</option>
          <option value="3">Admin</option>
          <option value="2">Editor</option>
          <option value="1">Visitor</option>
        </select>
      </label>
      <label htmlFor="icon">
        Select your icon color
        <select
          name="icon"
          id="icon"
          value={icon}
          onChange={handleChangeColorIcon}
        >
          <option value="">Choose a color</option>
          <option value="green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Blue">Blue</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

GroupSettingsFrom.propTypes = {
  member: PropTypes.object,
  firstname: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  role: PropTypes.number,
  icon: PropTypes.string,
  changeField: PropTypes.func,
  copyMember: PropTypes.func,
};

GroupSettingsFrom.defaultProps = {
  member: {},
  firstname: '',
  email: '',
  password: '',
  role: 0,
  icon: '',
  changeField: () => {},
  copyMember: () => {},
  updateMember: () => {},
  assignMemberToCloseInputView: () => {},
};

export default GroupSettingsFrom;
