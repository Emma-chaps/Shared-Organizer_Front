import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Field from 'src/components/forms/Field';
import { FaUserAlt, FaHome } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { BsCheckBox, BsListUl } from 'react-icons/bs';
import { GiKnifeFork, GiSoccerBall, GiHealthNormal } from 'react-icons/gi';
import './styles.scss';

const WidgetCreationForm = ({ widgetTitle, changeField, widgetListField }) => {
  const [displayDateInput, setDisplayDateInput] = useState(false);
  const [displayFields, setDisplayFields] = useState(false);
  const [selectedButton, setSelectedButton] = useState(false);

  const dateClasses = classNames('form__date--input', {
    'form__date--input--hidden': displayDateInput,
  });
  const fieldsClasses = classNames('form__list--display', {
    'form__list--display-none': displayFields,
  });
  const selectedButtonClasses = classNames('form__list-styles--button', {
    'form__list-styles--button--selected': selectedButton,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDisplayDate = () => {
    setDisplayDateInput(!displayDateInput);
  };

  const handleDisplayFields = (event) => {
    setDisplayFields(!displayFields);
    event.currentTarget.classList.toggle('selected');
    console.log('event.target:', event.currentTarget.className);
  };

  const familyMembers = [
    {
      id: 1,
      firstname: 'George',
    },
    {
      id: 2,
      firstname: 'Anne',
    },
  ];

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Create Your Widget</h2>

      <Field
        name="title"
        type="text"
        placeholder="add a title"
        value={widgetTitle}
        onChange={changeField}
        className="form__title"
      />

      <Field
        name="description"
        type="text"
        placeholder="optional: add a description"
        value={widgetTitle}
        onChange={changeField}
        className="form__description"
      />

      <div className="form__family">
        <h3 className="form__family__subtitle form__subtitle">
          Assign family members
        </h3>
        {familyMembers.length && (
          <ul className="form__family__list">
            {familyMembers.map((member) => (
              <li className="form__family__list--member" key={member.id}>
                <FaUserAlt />
                <span>{member.firstname}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="form__theme">
        <h3 className="form__subtitle">Assign a theme</h3>
        <ul className="form__theme-list">
          <li className="form__theme-list--icon">
            <GiHealthNormal />
          </li>
          <li className="form__theme-list--icon">
            <GiSoccerBall />
          </li>
          <li className="form__theme-list--icon">
            <GiKnifeFork />
          </li>
          <li className="form__theme-list--icon">
            <MdSchool />
          </li>
          <li className="form__theme-list--icon">
            <FaHome />
          </li>
        </ul>
      </div>

      <div className="form__date">
        <button className="form__date--button" onClick={handleDisplayDate}>
          Assign a date?
        </button>
        <input
          type="date"
          name="date"
          className={dateClasses}
          min="2021-03-01"
        />
        <input type="time" name="time" className={dateClasses} />
      </div>

      <div className="form__list">
        <h3 className="form__subtitle form__list__title">
          If you wish a list, select the style
        </h3>

        <button
          className="form__list-styles--button"
          onClick={handleDisplayFields}
        >
          <BsCheckBox />
        </button>
        <button
          className="form__list-styles--button"
          onClick={handleDisplayFields}
        >
          <BsListUl />
        </button>

        <div className={fieldsClasses}>
          <Field
            name="listField"
            type="text"
            placeholder="Add a list field"
            value={widgetListField}
            onChange={changeField}
            className="form__list--addField"
          />
        </div>
      </div>

      <button className="form__publish" onSubmit={handleSubmit}>
        Publish
      </button>
      <button className="form--delete-list">Delete list</button>
    </form>
  );
};

WidgetCreationForm.propTypes = {
  widgetTitle: PropTypes.string,
  changeField: PropTypes.func,
  familyMembers: PropTypes.array,
  widgetListField: PropTypes.string,
};

WidgetCreationForm.defaultProps = {
  widgetTitle: '',
  changeField: () => {},
  familyMembers: [],
  widgetListField: '',
};

export default WidgetCreationForm;
