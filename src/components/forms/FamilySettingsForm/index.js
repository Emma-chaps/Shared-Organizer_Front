import React, { useEffect } from 'react';
import Field from 'src/components/forms/Field';
import PropTypes from 'prop-types';

const FamilySettingsFrom = ({
  member,
  firstname,
  email,
  password,
  role,
  icon,
  changeField,
  copyMember,
  updateMember,
  assignMemberToCloseInputView,
}) => {
  useEffect(() => {
    copyMember(member);
  }, [member]);

  const handleSubmitUpdateMember = (event) => {
    event.preventDefault();
    updateMember();
    assignMemberToCloseInputView(`id${member.id}`);
  };

  return (
    <form onSubmit={handleSubmitUpdateMember}>
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
        <select name="role" id="role">
          <option value="3">Admin</option>
          <option value="2">Editor</option>
          <option value="1">Visitor</option>
        </select>
      </label>
      <label htmlFor="icon">
        <select name="icon" id="icon">
          <option value="icon1">Img1</option>
          <option value="icon2">Img2</option>
          <option value="icon3">Img3</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

FamilySettingsFrom.propTypes = {
  member: PropTypes.object,
  firstname: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  role: PropTypes.string,
  icon: PropTypes.string,
  changeField: PropTypes.func,
  copyMember: PropTypes.func,
  updateMember: PropTypes.func,
  assignMemberToCloseInputView: PropTypes.func,
};

FamilySettingsFrom.defaultProps = {
  member: {},
  firstname: '',
  email: '',
  password: '',
  role: '',
  icon: '',
  changeField: () => {},
  copyMember: () => {},
  updateMember: () => {},
  assignMemberToCloseInputView: () => {},
};

export default FamilySettingsFrom;
