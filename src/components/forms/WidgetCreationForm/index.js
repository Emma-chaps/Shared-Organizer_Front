import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Field from 'src/components/forms/Field';
import './styles.scss';

const WidgetCreationForm = ({
  widgetTitle,
  changeField,
  changeTextarea,
  widgetListField,
  widgetDescription,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log(widgetDescription);

  const getTextareaValue = (event) => {
    const { value } = event.target;
    changeTextarea(value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Create Your Widget</h2>

      <Field
        name="title"
        type="text"
        placeholder="add a title"
        value={widgetTitle}
        onChange={changeField}
        className="form__widget form__widget-title"
      />

      <textarea
        placeholder="optional: add a description"
        value={widgetDescription}
        onChange={getTextareaValue}
        name="description"
        className="form__widget form__widget-description"
      />

      <div className="form__family">
        <h3 className="form__family__subtitle form__subtitle">
          Assign family members
        </h3>
        {/* {familyMembers.length && (
          <ul className="form__family__list">
            {familyMembers.map((member) => (
              <li className="form__family__list--member" key={member.id}>
                <FaUserAlt />
                <span>{member.firstname}</span>
              </li>
            ))}
          </ul>
        )} */}
      </div>

      <div className="form__submit">
        <button
          type="button"
          className="form__submit__publish form__submit__button"
          onSubmit={handleSubmit}
        >
          Publish
        </button>
        <button
          type="button"
          className="form__submit--delete-list form__submit__button"
        >
          Delete list
        </button>
      </div>
    </form>
  );
};

WidgetCreationForm.propTypes = {
  widgetTitle: PropTypes.string,
  changeField: PropTypes.func,
  familyMembers: PropTypes.array,
  widgetListField: PropTypes.string,
  widgetDescription: PropTypes.string,
};

WidgetCreationForm.defaultProps = {
  widgetTitle: '',
  changeField: () => {},
  familyMembers: [],
  widgetListField: '',
  widgetDescription: '',
};

export default WidgetCreationForm;
