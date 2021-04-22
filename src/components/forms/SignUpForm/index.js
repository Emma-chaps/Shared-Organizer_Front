import React, { useState } from 'react';
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
  setSelectedIcon,
}) => {
  const [loginErrors, setLoginErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password && firstname && groupName) {
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
      setLoginErrors(errors);
    }
  };

  const handleChange = (event) => {
    const { icon } = event.currentTarget.dataset;
    setSelectedIcon(icon);
  };

  return (
    <>
      {loginErrors.map((error) => (
        <div key={error}>{error}</div>
      ))}
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
          <div data-icon="bleu" onClick={handleChange}>
            <FaUserAlt className="icon-container--blue" />
          </div>
          <div data-icon="green" onClick={handleChange}>
            <FaUserAlt className="icon-container--green" />
          </div>
          <div data-icon="yellow" onClick={handleChange}>
            <FaUserAlt className="icon-container--yellow" />
          </div>
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
