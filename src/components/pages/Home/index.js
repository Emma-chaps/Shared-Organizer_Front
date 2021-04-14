import React, { useState, useEffect } from 'react';
import SignUpForm from 'src/containers/forms/SignUpForm';
import LoginForm from 'src/containers/forms/LoginForm';
import { Redirect } from 'react-router';

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
    <div className='log'>
      <div >
        <h1 className='title'>Family Organizer LOGO</h1>
        <h2 className="how">How it works ?</h2>
      </div>
      <div className='form'>
        <div >{selectedButtonSignUp ? <SignUpForm /> : <LoginForm />}</div>
          <button
            className='button'
            onClick={changeFormToLoginForm}>
              Sign up
          </button>
          <button
            className='button'
            onClick={changeFormToSignUpForm}>
              Login
          </button>
        </div>
      </div>
  );
};

export default Home;
