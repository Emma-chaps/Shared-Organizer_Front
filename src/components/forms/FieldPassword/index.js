import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

const FieldPassword = ({
  name,
  label,
  value,
  onChange,
  className,
  maxLength,
  required,
}) => {
  const [seePassword, setSeePassword] = useState(false);
  const [inputType, setInputType] = useState('password');

  const changeSeePassword = () => {
    setSeePassword(!seePassword);
    if (inputType === 'password') {
      setInputType('text');
    }
    if (inputType === 'text') {
      setInputType('password');
    }
  };

  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  return (
    <div className={className}>
      <label htmlFor={name} className="">
        {label}
        <input
          id={name}
          type={inputType}
          name={name}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          required={required}
        />
        {seePassword ? (
          <BsEye onClick={changeSeePassword} className="password-eye-icon" />
        ) : (
          <BsEyeSlash
            onClick={changeSeePassword}
            className="password-eye-icon"
          />
        )}
      </label>
    </div>
  );
};

FieldPassword.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FieldPassword.defaultProps = {
  value: '',
};

export default FieldPassword;
