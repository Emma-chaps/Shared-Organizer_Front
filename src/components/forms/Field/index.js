import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({ type, name, placeholder, value, onChange, className }) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <div>
      <label htmlFor={name}>
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={className}
        />
      </label>
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Field.defaultProps = {
  placeholder: '',
  className: PropTypes.string,
};

export default Field;
