import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';

const SignUpForm = ({
  email,
  password,
  groupName,
  firstname,
  changeField,
  handleSignUp,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
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
        <Field
          name="groupName"
          type="text"
          placeholder="Family name"
          value={groupName}
          onChange={changeField}
        />
        <Field
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={changeField}
        />
        <button type="submit">Create group</button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  changeField: PropTypes.func,
};

SignUpForm.defaultProps = {
  changeField: () => {},
};

export default SignUpForm;
