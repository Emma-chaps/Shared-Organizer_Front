import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import { FaUserAlt } from 'react-icons/fa';

import './style.scss';

const SignUpForm = ({
  email,
  password,
  groupName,
  firstname,
  changeField,
  handleSignUp,
  setSelectedIcon,
}) => {
  const selectedIcon = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
  };

  const handleChange = () => {
    const icon = selectedIcon.current.dataset.icon;
    setSelectedIcon(icon);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <Field
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={firstname}
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

        <div className="icon-container">
          <div data-icon="bleu" onClick={handleChange} ref={selectedIcon}>
            <FaUserAlt className="icon-container--blue" />
          </div>
          <div data-icon="green" onClick={handleChange} ref={selectedIcon}>
            <FaUserAlt className="icon-container--green" />
          </div>
          <div data-icon="yellow" onClick={handleChange} ref={selectedIcon}>
            <FaUserAlt className="icon-container--yellow" />
          </div>
        </div>
        <button className="buttonSign" type="submit">
          Create group
        </button>
      </form>
    </>
  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  changeField: PropTypes.func,
  handleSignUp: PropTypes.func,
  setSelectedIcon: PropTypes.func,
};

SignUpForm.defaultProps = {
  changeField: () => {},
  handleSignUp: () => {},
  setSelectedIcon: () => {},
};

export default SignUpForm;
