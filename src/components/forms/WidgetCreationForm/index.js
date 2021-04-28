import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import './styles.scss';
import { FaUserAlt } from 'react-icons/fa';
import { findMember } from 'src/selectors/findMember';

const WidgetCreationForm = ({
  changeField,
  changeTextarea,
  widgetTitle,
  widgetDescription,
  members,
  assignMember,
  membersToAdd,
  submitWidget,
  hideWidgetCreationModal,
  widget,
  removeMember,
  setWidgetToEdit,
  widgetToEdit,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  // const [selectedWidget, setSelectedWidget] = useState(widget);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (membersToAdd?.length && widgetTitle) {
      setErrorMessage('');
      hideWidgetCreationModal();
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
    if (!findMember(event.currentTarget.id, membersToAdd)) {
      console.log('IF');
      assignMember(event.currentTarget.id, members);
    } else {
      console.log('ELSE');
      removeMember(event.currentTarget.id, membersToAdd);
    }
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

      <div className="form__group">
        <h3 className="form__group__subtitle form__subtitle">
          Assign group members
        </h3>
        <ul className="form__group__list">
          {members.map((member) => (
            <li className="form__group__list--member" key={member.id}>
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
