import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';

const SignUpForm = ({ groupName, firstname }) => (
  <div>
    <form>
      <Field name="email" type="email" placeholder="Email" />
      <Field name="password" type="password" placeholder="Password" />
      <Field
        name="groupName"
        type="text"
        placeholder="Family name"
        value={groupName}
      />
      <Field
        name="firstname"
        type="text"
        placeholder="Firstname"
        value={firstname}
      />
      <button type="submit">Create group</button>
    </form>
  </div>
);

SignUpForm.propTypes = {};

export default SignUpForm;
