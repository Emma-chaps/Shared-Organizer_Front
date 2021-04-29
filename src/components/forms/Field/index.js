import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  name,
  placeholder,
  label,
  value,
  onChange,
  className,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <div className={className}>
      <label htmlFor={name}>
        {label}
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  placeholder: '',
  value: '',
};

export default Field;
