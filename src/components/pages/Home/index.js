import React, { useState } from 'react';
import SignUpForm from 'src/containers/forms/SignUpForm';
import LoginForm from 'src/containers/forms/LoginForm';

const Home = () => {
  //  changes the display of the form according to the selected button
  const [selectedButtonSignUp, setSelectedButtonSignUp] = useState(false);

  const changeFormToLoginForm = () => {
    setSelectedButtonSignUp(true);
  };

  const changeFormToSignUpForm = () => {
    setSelectedButtonSignUp(false);
  };

  return (
    <div>
      <div>
        <h1>Family Organizer</h1>
        <h2>How it works ?</h2>
      </div>
      <div>{selectedButtonSignUp ? <SignUpForm /> : <LoginForm />}</div>
      <div>
        <div onClick={changeFormToLoginForm}>Sign up</div>
        <div onClick={changeFormToSignUpForm}>Login</div>
      </div>
    </div>
  );
};

export default Home;
