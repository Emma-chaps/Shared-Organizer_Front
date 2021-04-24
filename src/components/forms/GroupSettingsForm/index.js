import React, { useEffect } from 'react';
import Field from 'src/components/forms/Field';
import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';

import '../styles.scss';

const GroupSettingsFrom = ({
  member,
  firstname,
  email,
  password,
  role,
  icon,
  changeField,
  onSubmit,
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

  const handleChangeColorIcon = (event) => {
    const selectedIcon = event.target.value;
    setSelectedIcon(selectedIcon);
  };

  const handleChangeRole = (event) => {
    const selectedRole = event.target.value;
    setSelectedRole(selectedRole);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex-row">
        <label htmlFor="icon">
          <select
            name="icon"
            id="icon"
            value={icon}
            onChange={handleChangeColorIcon}
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
        {role === 3 ? (
          <div>Admin</div>
        ) : (
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
        )}
        <button type="submit">Save</button>
      </form>
    </div>
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
