/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/forms/Field';
import { FaUserAlt } from 'react-icons/fa';
import { findMember } from 'src/selectors/findMember';
import { AiOutlineCheckCircle } from 'react-icons/ai';

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
  isMemberSelected,
  setIsSelectedMember,
  removeSelectedMember,
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
        'A widget must have a title and at least one member assigned'
      );
    }
  };

  const getInputValue = (event) => {
    const { value } = event.target;
    changeField(value);
  };

  const getTextareaValue = (event) => {
    const { value } = event.target;
    changeTextarea(value);
  };

  const handleAddMember = (event) => {
    setIsSelectedMember(`id${event.currentTarget.id}`);
    if (!findMember(event.currentTarget.id, membersToAdd)) {
      console.log('IF');
      setIsSelectedMember(`id${event.currentTarget.id}`);
      assignMember(event.currentTarget.id, members);
    } else {
      console.log('ELSE');
      removeSelectedMember(`id${event.currentTarget.id}`);
      removeMember(event.currentTarget.id, membersToAdd);
    }
  };

  return (
    <div className="container-form">
      <h2 className="container-form__title">Widget</h2>
      <form
        onSubmit={handleSubmit}
        className="widget-settings__input positioned-parent"
      >
        <label htmlFor="title" className="widget-settings__input__title-label">
          Widget's name
        </label>
        <input
          name="title"
          type="text"
          label="title"
          value={widgetTitle}
          onChange={getInputValue}
          placeholder="Name of your widget"
          className="widget-settings__input__title-input"
          required
        />
        <label
          htmlFor="description"
          className="widget-settings__input__description-label"
        >
          Widget's description
        </label>
        <textarea
          placeholder="Optional: Description of your widget"
          value={widgetDescription}
          onChange={getTextareaValue}
          name="description"
          className="widget-settings__input__description-input"
        />
        <h3 className="widget-settings__member-title">
          Assign group member to the widget
        </h3>
        <ul className="widget-settings__members">
          {members.map((member) => (
            <li key={member.id}>
              {isMemberSelected[`id${member.id}`] ? (
                <>
                  <AiOutlineCheckCircle />
                  <button
                    type="button"
                    onClick={handleAddMember}
                    id={member.id}
                    className={`widget-settings__members__button-modal-filter icon-container--${member.icon}`}
                  >
                    {member.firstname}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleAddMember}
                  id={member.id}
                  className={`widget-settings__members__button-modal-filter icon-container--${member.icon}`}
                >
                  {member.firstname}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className="form__submit">
          <span>{errorMessage}</span>
          <button type="submit" className="classic-btn widget-settings__btn">
            Publish
          </button>
        </div>
      </form>
    </div>
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
