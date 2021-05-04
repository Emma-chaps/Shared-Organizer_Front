import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import SignUpForm from 'src/containers/forms/SignUpForm';
import LoginForm from 'src/containers/forms/LoginForm';
import Footer from 'src/components/Footer';

const Home = ({ isLogged, isAdmin }) => {
  //  changes the display of the form according to the selected button
  const [selectedButtonSignUp, setSelectedButtonSignUp] = useState(false);
  const [loginUnselected, setLoginUnselected] = useState(false);
  const [signupUnselected, setSignupUnselected] = useState(true);

  const loginClasses = classNames('home__btns-container__btn', {
    'home__btns-container__btn-unselected': loginUnselected,
  });
  const signupClasses = classNames('home__btns-container__btn', {
    'home__btns-container__btn-unselected': signupUnselected,
  });

  const { state } = useLocation();

  if (isLogged && isAdmin) {
    return <Redirect to={state?.from || '/dashboard'} />;
  }
  if (isLogged) {
    return <Redirect to="/dashboard" />;
  }

  const changeFormToLoginForm = () => {
    setSelectedButtonSignUp(false);
    setLoginUnselected(false);
    setSignupUnselected(true);
  };
  const changeFormToSignUpForm = () => {
    setSelectedButtonSignUp(true);
    setLoginUnselected(true);
    setSignupUnselected(false);
  };

  return (
    <div className="home-container">
      <div className="home">
        <div className="home__header">
          <h1 className="home__header__title">Shared Organizer.</h1>
          {/* <h2 className="home__header__subtitle">How does it work ?</h2> */}
        </div>
        <div className="home__main">
          {selectedButtonSignUp ? <SignUpForm /> : <LoginForm />}
        </div>
      </div>
      <div className="home__btns-container">
        <button
          type="button"
          className={signupClasses}
          onClick={changeFormToSignUpForm}
        >
          Create group
        </button>
        <button
          type="button"
          className={loginClasses}
          onClick={changeFormToLoginForm}
        >
          Sign in
        </button>
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
