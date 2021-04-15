import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import { FaUserAlt, FaHome } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { BsCheckBox, BsListUl } from 'react-icons/bs';
import { GiKnifeFork, GiSoccerBall, GiHealthNormal } from 'react-icons/gi';

const WidgetCreationForm = ({ widgetTitle, changeField, widgetListField }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
        placeholder="Title"
        value={widgetTitle}
        onChange={changeField}
        className="form__title"
      />

      <Field
        name="title"
        type="text"
        placeholder="Title"
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
        <button className="form__date--button">Assign a date?</button>
        <input type="time" name="appt" className="form__date--input" />
      </div>

      <div className="form__list">
        <h3 className="form__subtitle form__list__title">
          If you wish a list, select the style
        </h3>
        <ul className="form__list__styles">
          <li className="form__list__styles--checkbox">
            <BsCheckBox />
          </li>
          <li className="form__list__styles--bullet">
            <BsListUl />
          </li>
        </ul>

        <Field
          name="title"
          type="text"
          placeholder="Title"
          value={widgetListField}
          onChange={changeField}
          className="form__list--addField hidden"
        />
      </div>
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
