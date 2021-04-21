import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import SignUpForm from 'src/containers/forms/SignUpForm';
import LoginForm from 'src/containers/forms/LoginForm';

import './styles.scss';

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
    <div className="home">
      <div className="home__header">
        <h1 className="home__header__title">Family Organizer</h1>
        <h2 className="home__header__subtitle">How it works ?</h2>
      </div>
      <div className="home__main">
        <div className="home__main__form-container">
          {selectedButtonSignUp ? <SignUpForm /> : <LoginForm />}
        </div>
        <div className="home__main__btns-container">
          <button
            className="home__main__btns-container--signup"
            onClick={changeFormToSignUpForm}
          >
            Sign up
          </button>
          <button
            className="home__main__btns-container--login"
            onClick={changeFormToLoginForm}
          >
            Login
          </button>
        </div>
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
