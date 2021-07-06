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
        errors.push({ id: 1, message: 'Firstname is required' });
      }
      if (!groupName) {
        errors.push({ id: 2, message: 'Group name is required' });
      }
      if (!email) {
        errors.push({ id: 3, message: 'Email is required' });
      }
      if (!password) {
        errors.push({ id: 4, message: 'Password is required' });
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
          required
        />
        <Field
          label="first name"
          name="firstname"
          type="text"
          value={firstname}
          onChange={changeField}
          className="home-input"
          required
        />
        <Field
          label="email"
          name="email"
          type="email"
          value={email}
          onChange={changeField}
          className="home-input"
          required
        />
        <FieldPassword
          className="home-input positioned-parent"
          label="password"
          name="password"
          value={password}
          onChange={changeField}
          required
        />

        <button className="classic-btn button-sign" type="submit">
          Create group
        </button>
      </form>
      <div className="errors">
        {signUpErrors?.map((error) => (
          <p key={error.id} className="errors__message">
            *{error.message}
          </p>
        ))}
        {backError && <p className="errors__message">*{backError}</p>}
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
  backError: PropTypes.string,
};

SignUpForm.defaultProps = {
  changeField: () => {},
  handleSignUp: () => {},
  backError: undefined,
};

export default SignUpForm;
