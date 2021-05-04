import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import FieldPassword from 'src/components/forms/FieldPassword';

const SignUpForm = ({
  email,
  password,
  groupName,
  firstname,
  changeField,
  handleSignUp,
  backError,
}) => {
  const [signUpErrors, setSignUpErrors] = useState([]);
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
      setSignUpErrors(errors);
    }
  };

  return (
    <>
      <form className="form-signup" onSubmit={handleSubmit}>
        <Field
          label="group name"
          name="groupName"
          type="text"
          value={groupName}
          onChange={changeField}
          className="home-input"
          maxLength="30"
        />
        <Field
          label="first name"
          name="firstname"
          type="text"
          value={firstname}
          onChange={changeField}
          className="home-input"
        />
        <Field
          label="email"
          name="email"
          type="email"
          value={email}
          onChange={changeField}
          className="home-input"
        />
        <FieldPassword
          className="home-input"
          label="password"
          name="password"
          value={password}
          onChange={changeField}
          isRequired="isrequired"
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
        {backError && <div className="errors__message">*{backError}</div>}
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
