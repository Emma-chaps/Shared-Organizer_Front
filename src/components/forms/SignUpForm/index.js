import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import { FaUserAlt } from 'react-icons/fa';

import './style.scss';

const SignUpForm = ({
  email,
  password,
  groupName,
  firstname,
  changeField,
  handleSignUp,
  selectedIcon,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
  };

  const handleClick = (event) => {
    const icon = event.target.dataset.icon;
    console.log(icon);
    selectedIcon(icon);
  };

  console.log(groupName);
  console.log('coucou');

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <Field
          name="groupName"
          type="text"
          placeholder="Family name"
          value={groupName}
          onChange={changeField}
        />
        <Field
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={changeField}
        />
        <div>
          <FaUserAlt
            className="icon"
            data-icon="FaUserAlt"
            onClick={handleClick}
          />
        </div>
        <button className="buttonSign" type="submit">
          Create group
        </button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  changeField: PropTypes.func,
  handleSignUp: PropTypes.func,
  selectedIcon: PropTypes.func,
};

SignUpForm.defaultProps = {
  changeField: () => {},
  handleSignUp: () => {},
  selectedIcon: () => {},
};

export default SignUpForm;
