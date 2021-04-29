import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

import '../styles.scss';

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
      <div className="errors">
        {loginErrors.map((error) => (
          <div key={error} className="errors__message">
            {error}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeField}
          isRequired="isrequired"
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={changeField}
          isRequired="isrequired"
        />
        <button className="buttonLogin" type="submit">
          Connection
        </button>
      </form>
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
