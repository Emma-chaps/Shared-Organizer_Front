/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
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
  removeMember,
  isMemberSelected,
  setIsSelectedMember,
  removeSelectedMember,
  errorMessage,
  setErrorMessage,
}) => {
  // const [errorMessage, setErrorMessage] = useState('');
  // const [selectedWidget, setSelectedWidget] = useState(widget);
  useEffect(() => {
    setErrorMessage('');
  }, []);

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
      setIsSelectedMember(`id${event.currentTarget.id}`);
      assignMember(event.currentTarget.id, members);
    } else {
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
          Widget name
        </label>
        <input
          name="title"
          type="text"
          label="title"
          value={widgetTitle}
          onChange={getInputValue}
          placeholder="Name of your widget"
          className="widget-settings__input__title-input"
          maxLength={20}
          required
        />
        <label
          htmlFor="description"
          className="widget-settings__input__description-label"
        >
          Widget description
        </label>
        <textarea
          placeholder="Optional: Description of your widget"
          value={widgetDescription}
          onChange={getTextareaValue}
          name="description"
          className="widget-settings__input__description-input"
        />
        <h3 className="widget-settings__member-title">
          Assign group members to the widget
        </h3>
        <ul className="widget-settings__members">
          {members.map((member) => (
            <li key={member.id}>
              {isMemberSelected[`id${member.id}`] ? (
                <>
                  <button
                    type="button"
                    onClick={handleAddMember}
                    id={member.id}
                    className={`widget-settings__members__button-modal-filter icon-container--${member.icon}`}
                  >
                    <span className="firstname-selected">
                      <AiOutlineCheckCircle className="icon-check" />{' '}
                      {member.firstname}
                    </span>
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
          <span className="error-form-message">{errorMessage}</span>
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
