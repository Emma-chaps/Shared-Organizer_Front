import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';
import SignUpForm from 'src/containers/forms/SignUpForm';
import LoginForm from 'src/containers/forms/LoginForm';

import './styles.scss';

const Home = ({ isLogged, isAdmin }) => {
  //  changes the display of the form according to the selected button
  const [selectedButtonSignUp, setSelectedButtonSignUp] = useState(false);

  const { state } = useLocation();

  if (isLogged && isAdmin) {
    return <Redirect to={state?.from || '/dashboard'} />;
  }
  if (isLogged) {
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
        <h1 className="home__header__title">Shared Organizer</h1>
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
  isLogged: PropTypes.bool,
};

Home.defaultProps = {
  isLogged: false,
};

export default Home;
