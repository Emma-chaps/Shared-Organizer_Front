import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import SignUpForm from 'src/containers/forms/SignUpForm';
import LoginForm from 'src/containers/forms/LoginForm';

import './styles.scss';
import Logo_FO from './Logo_FO.png';

const Home = ({ logged }) => {
  //  changes the display of the form according to the selected button
  const [selectedButtonSignUp, setSelectedButtonSignUp] = useState(false);

  if (logged) {
    return <Redirect to="/dashboard" />;
  }

  const changeFormToLoginForm = () => {
    setSelectedButtonSignUp(false);
  };
  const changeFormToSignUpForm = () => {
    setSelectedButtonSignUp(true);
  };

  return (
    <div className="log">
      <div>
        <img
        className="log__image"
        src={Logo_FO} alt="Logo Family Orgenazer" />
        <h1 className="log__title">Family Organizer</h1>
        <h2 className="log__how">How it works ?</h2>
      </div>
      <div className="log__form">
        <div>{selectedButtonSignUp ? <SignUpForm /> : <LoginForm />}</div>
        <button className="log__button" onClick={changeFormToSignUpForm}>
          Sign up
        </button>
        <button className="log__button" onClick={changeFormToLoginForm}>
          Login
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  logged: PropTypes.bool,
};

Home.defaultProps = {
  logged: false,
};

export default Home;
