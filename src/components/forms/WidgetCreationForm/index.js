import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import './styles.scss';
import { FaUserAlt } from 'react-icons/fa';

const WidgetCreationForm = ({
  changeField,
  changeTextarea,
  widgetTitle,
  widgetDescription,
  date,
  range,
  members,
  assignMember,
  membersToAdd,
  submitWidget,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (membersToAdd.length && widgetTitle) {
      setErrorMessage('');
      submitWidget();
    } else {
      setErrorMessage(
        'A widget must have a title and at least one member assigned',
      );
    }
  };

  const getTextareaValue = (event) => {
    const { value } = event.target;
    changeTextarea(value);
  };

  const handleAddMember = (event) => {
    assignMember(event.target.id, members);
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
        <ul className="form__family__list">
          {members.map((member) => (
            <li className="form__family__list--member" key={member.id}>
              <FaUserAlt />
              <button type="button" onClick={handleAddMember} id={member.id}>
                add {member.firstname}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="form__submit">
        <span>{errorMessage}</span>
        <button
          type="button"
          className="form__submit__publish form__submit__button"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </form>
  );
};

WidgetCreationForm.propTypes = {
  members: PropTypes.array,
  widgetDescription: PropTypes.string,
  date: PropTypes.string,
  range: PropTypes.string,
  widgetTitle: PropTypes.string,
  changeField: PropTypes.func,
  changeTextarea: PropTypes.func,
};

WidgetCreationForm.defaultProps = {
  members: [],
  widgetDescription: '',
  date: '',
  range: '',
  widgetTitle: '',
  changeField: () => {},
  changeTextarea: () => {},
};

export default WidgetCreationForm;
