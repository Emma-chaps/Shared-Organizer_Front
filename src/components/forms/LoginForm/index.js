import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import '../styles.scss';

const LoginForm = ({ email, password, changeField, handleLogin }) => {
  const [loginErrors, setLoginErrors] = useState([]);
  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  };

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
        <TextField
          name="password"
          label="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
          variant="outlined"
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button className="buttonLogin" type="submit">
          Sign in
        </Button>
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
