import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import FieldPassword from 'src/components/forms/FieldPassword';

const LoginForm = ({ email, password, changeField, handleLogin }) => {
  const [loginErrors, setLoginErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      handleLogin();
    } else {
      const errors = [];
      if (!email) {
        errors.push('Email is required');
      }
      if (!password) {
        errors.push('Password is required');
      }
      setLoginErrors(errors);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-login">
        <Field
          label="first name"
          name="email"
          type="email"
          value={email}
          onChange={changeField}
          isRequired="isrequired"
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
          sign in
        </button>
      </form>
      <div className="errors">
        {loginErrors.map((error) => (
          <div key={error} className="errors__message">
            *{error}
          </div>
        ))}
      </div>
    </>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func,
  handleLogin: PropTypes.func,
};

LoginForm.defaultProps = {
  changeField: () => {},
  handleLogin: () => {},
};

export default LoginForm;
