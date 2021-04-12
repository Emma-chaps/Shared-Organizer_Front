import React from 'react';
import Field from 'src/components/Field';

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
LoginForm.propTypes = {};

export default LoginForm;
