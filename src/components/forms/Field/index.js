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
  maxLength,
  required,
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
          maxLength={maxLength}
          required={required}
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
  label: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
};

Field.defaultProps = {
  placeholder: '',
  value: '',
  label: '',
  className: '',
  maxLength: '',
  required: false,
};

export default Field;
