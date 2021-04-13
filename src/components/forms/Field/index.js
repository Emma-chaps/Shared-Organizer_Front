import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ type, name, placeholder, value, onChange }) => {
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
};

Field.defaultProps = {
  placeholder: '',
};

export default Field;
