import React, { useState } from 'react';
import SignUpForm from 'src/components/SignUpForm';
import LoginForm from 'src/components/LoginForm';

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(true);

  const changeFormToLoginForm = () => {
    setSelectedButton(false);
  };

  const changeFormToSignUpForm = () => {
    setSelectedButton(true);
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
