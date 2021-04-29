import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import './style.scss';

const Field = ({ type, name, placeholder, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <div>
      <TextField
        label={name}
        variant="outlined"
        margin="dense"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
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
