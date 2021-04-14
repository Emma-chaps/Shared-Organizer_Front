import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

import './style.scss';

const LoginForm = ({ email, password, changeField, handleLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
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
        <button className="buttonLogin" type="submit">Connection</button>
      </form>
    </div>
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
