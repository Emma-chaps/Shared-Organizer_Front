import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ type, name, placeholder }) => (
  <div>
    <label htmlFor={name}>
      <input id={name} type={type} name={name} placeholder={placeholder} />
    </label>
  </div>
);
Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Field.defaultProps = {
  placeholder: '',
};

export default Field;
