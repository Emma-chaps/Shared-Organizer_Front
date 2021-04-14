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
    <div>
      <div>
        <h1>Family Organizer</h1>
        <h2>How it works ?</h2>
      </div>
      <div>{selectedButtonSignUp ? <SignUpForm /> : <LoginForm />}</div>
      <div>
        <div onClick={changeFormToSignUpForm}>Sign up</div>
        <div onClick={changeFormToLoginForm}>Login</div>
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
