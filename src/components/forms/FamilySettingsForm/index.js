import React from 'react';
import Field from 'src/components/forms/Field';
import PropTypes from 'prop-types';

const FamilySettingsFrom = ({ firstname, email, password, changeField }) => {
  return (
    <div>
      <form action="">
        <Field
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={changeField}
        />
        <Field
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeField}
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={changeField}
        />
        <label htmlFor="role">
          <select name="role" id="role">
            <option value="admin">Administrateur</option>
            <option value="parent">Parent</option>
            <option value="enfant">Enfant</option>
          </select>
        </label>
        <label htmlFor="icon">
          <select name="icon" id="icon">
            <option value="admin">Img1</option>
            <option value="parent">Img2</option>
            <option value="enfant">Img3</option>
          </select>
        </label>
      </form>
      <button>Save</button>
    </div>
  );
};

FamilySettingsFrom.propTypes = {};

export default FamilySettingsFrom;
