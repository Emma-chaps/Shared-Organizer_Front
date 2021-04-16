import React from 'react';
import Field from 'src/components/forms/Field';
import PropTypes from 'prop-types';
import { BsCheckBox, BsListUl } from 'react-icons/bs';

export default function ListSection({ onChangeField, widgetListField }) {
  return (
    <div>
      what kind?
      <label htmlFor="bullet">
        <input
          type="radio"
          name="listStyle"
          id="bullet"
          value="bullet"
          checked
        />
        Bullet points
      </label>
      <label htmlFor="checkbox">
        <input type="radio" name="listStyle" id="checkbox" value="checkbox" />
        Checkbox
      </label>
      <div>
        <Field
          name="listFieldValue"
          type="text"
          placeholder="Add a list field"
          value={widgetListField}
          onChange={onChangeField}
          className="form__list--add-field"
        />
      </div>
    </div>
  );
}

ListSection.propTypes = {
  widgetListField: PropTypes.string,
  onChangeField: PropTypes.func,
};

ListSection.defaultProps = {
  widgetListField: '',
  onChangeField: () => {},
};
