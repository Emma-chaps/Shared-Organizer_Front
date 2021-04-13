import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

const LoginForm = ({ email, password, changeField }) => (
  <div>
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
    <button type="submit">Connection</button>
  </div>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func,
};

LoginForm.defaultProps = {
  changeField: () => {},
};

export default LoginForm;
