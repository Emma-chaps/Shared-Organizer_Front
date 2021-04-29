import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

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
      <form className="form-signup" onSubmit={handleSubmit}>
        <Field
          name="groupName"
          type="text"
          value={groupName}
          onChange={changeField}
          className="home-input"
        />
        <Field
          name="firstname"
          type="text"
          value={firstname}
          onChange={changeField}
          className="home-input"
        />
        <Field
          name="email"
          type="email"
          value={email}
          onChange={changeField}
          className="home-input"
        />
        <Field
          name="password"
          type="password"
          value={password}
          onChange={changeField}
          className="home-input"
        />

        <button className="classic-btn button-sign" type="submit">
          Create group
        </button>
      </form>
      <div className="errors">
        {signUpErrors.map((error) => (
          <div key={error} className="errors__message">
            *{error}
          </div>
        ))}
      </div>
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
