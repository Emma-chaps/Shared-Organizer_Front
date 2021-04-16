import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Field from 'src/components/forms/Field';
import { FaUserAlt, FaHome } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

import { GiKnifeFork, GiSoccerBall, GiHealthNormal } from 'react-icons/gi';
import './styles.scss';
import ListSection from './ListSection';

const WidgetCreationForm = ({
  widgetTitle,
  changeField,
  changeTextarea,
  widgetListField,
  widgetDescription,
}) => {
  const [hideDateInput, setHideDateInput] = useState(true);
  const [displayListEdit, setDisplayListEdit] = useState(false);
  const [selectedButton, setSelectedButton] = useState(false);

  const dateClasses = classNames('form__date--input', {
    'form__date--input--hidden': hideDateInput,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDisplayDate = () => {
    setHideDateInput(!hideDateInput);
  };

  const handledisplayListEdit = () => {
    setDisplayListEdit(!displayListEdit);
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
        <button
          type="button"
          className="form__date--button"
          onClick={handleDisplayDate}
        >
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
          Would you like to add a list ?
        </h3>
        <button type="button" onClick={handledisplayListEdit}>
          Yes please!
        </button>
        {displayListEdit && (
          <ListSection
            onChangeField={changeField}
            widgetListField={widgetListField}
          />
        )}
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
