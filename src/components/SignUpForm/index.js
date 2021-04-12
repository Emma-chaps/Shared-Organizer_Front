import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';

const SignUpForm = () => (
  <div>
    <form>
      <Field name="email" type="email" placeholder="Email" />
      <Field name="password" type="password" placeholder="Password" />
      <button type="submit">Connection</button>
    </form>
  </div>
);

SignUpForm.propTypes = {};

export default SignUpForm;
