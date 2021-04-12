import React, { useState } from 'react';
import SignUpForm from 'src/components/SignUpForm';
import LoginForm from 'src/containers/LoginForm';

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(false);

  const changeFormToLoginForm = () => {
    setSelectedButton(true);
  };

  const changeFormToSignUpForm = () => {
    setSelectedButton(false);
  };

  return (
    <div>
      <div>
        <h1>Family Organizer</h1>
        <h2>How it works ?</h2>
      </div>
      <div>{selectedButton ? <SignUpForm /> : <LoginForm />}</div>
      <div>
        <div onClick={changeFormToLoginForm}>Sign up</div>
        <div onClick={changeFormToSignUpForm}>Login</div>
      </div>
    </div>
  );
};

export default Home;
