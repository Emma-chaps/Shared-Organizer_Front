import React from 'react';
import Field from '../Field';

const LoginForm = () => (
  <div>
    <Field name="email" type="email" placeholder="Email" />
    <Field name="password" type="password" placeholder="Password" />
    <Field name="groupName" type="text" placeholder="Family name" />
    <Field name="firstname" type="text" placeholder="Firstname" />
    <button type="submit">Create group</button>
  </div>
);
LoginForm.propTypes = {};

export default LoginForm;
