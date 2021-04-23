import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import { FaUserAlt } from 'react-icons/fa';

import '../styles.scss';
import './styles.scss';

const SignUpForm = ({
  email,
  password,
  groupName,
  firstname,
  selectedIcon,
  changeField,
  handleSignUp,
  setSelectedIcon,
  colors,
}) => {
  const [signUpErrors, setSignUpErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password && firstname && groupName && selectedIcon) {
      handleSignUp();
    } else {
      const errors = [];
      if (!firstname) {
        errors.push('Firstname is required');
      }
      if (!groupName) {
        errors.push('Group name is required');
      }
      if (!email) {
        errors.push('Email is required');
      }
      if (!password) {
        errors.push('Password is required');
      }
      if (!selectedIcon) {
        errors.push('Icon is required');
      }
      setSignUpErrors(errors);
    }
  };

  const handleChange = (event) => {
    const { icon } = event.currentTarget.dataset;
    setSelectedIcon(icon);
  };

  return (
    <>
      <div className="errors">
        {signUpErrors.map((error) => (
          <div key={error} className="errors__message">
            {error}
          </div>
        ))}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <Field
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={changeField}
        />
        <Field
          name="groupName"
          type="text"
          placeholder="Group name"
          value={groupName}
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
        <div className="icon-container">
          {colors.map((color) => (
            <div data-icon={color} onClick={handleChange} key={color}>
              <FaUserAlt className={`icon-container--${color}`} />
            </div>
          ))}
        </div>
        <button className="buttonSign" type="submit">
          Create group
        </button>
      </form>
    </>
  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  changeField: PropTypes.func,
  handleSignUp: PropTypes.func,
  setSelectedIcon: PropTypes.func,
};

SignUpForm.defaultProps = {
  changeField: () => {},
  handleSignUp: () => {},
  setSelectedIcon: () => {},
};

export default SignUpForm;
