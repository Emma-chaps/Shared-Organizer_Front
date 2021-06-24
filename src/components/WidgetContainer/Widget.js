import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'src/components/Modal';
import WidgetCreationForm from 'src/containers/forms/WidgetCreationForm';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

function Widget({
  widget,
  editWidget,
  deleteWidget,
  copyWidgetToEdit,
  showWidgetCreationModal,
  hideWidgetCreationModal,
  displayCreationModal,
  colorMember,
  updateSelectedMember,
  cleanSelectedMembers,
  isOpenedDeleteWidgetModal,
  openWidgetDeleteModal,
  closeWidgetDeleteModal,
  isAdmin,
  isEditor,
}) {
  const [displayEdit, setDisplayEdit] = useState(false);

  const { members } = widget;
  const handleEdit = () => {
    copyWidgetToEdit(widget, members);
    showWidgetCreationModal();
    cleanSelectedMembers();
    members.map((selectedMemberInWidget) => {
      updateSelectedMember(`id${selectedMemberInWidget.id}`);
    });
    setDisplayEdit(true);
  };

  const handleOpenDeleteWidgetModal = (event) => {
    closeWidgetDeleteModal();
    console.log(event.currentTarget.id);
    openWidgetDeleteModal(`id${event.currentTarget.id}`);
  };

  const handleDeleteWidget = (event) => {
    deleteWidget(event.currentTarget.id);
    closeWidgetDeleteModal();
  };

  return (
    <article className="widget">
      <div className="visible-collapsed">
        <span className={`name-tag color-container--${colorMember?.color}`}>
          {widget?.author[0]}
        </span>
        <header className="widget-header">
          <h2 className="widget__title">{widget?.title}</h2>
          <p className="widget__author">Added by {widget?.author}</p>{' '}
        </header>
        <div className="edit-delete-btns positioned-parent">
          {(isAdmin || isEditor) && (
            <>
              <button
                type="button"
                className="button-change button-edit"
                id={widget?.id}
                onClick={handleEdit}
              >
                <FiEdit2 />
              </button>
              <button
                type="button"
                className="button-change button-delete"
                id={widget.id}
                onClick={handleOpenDeleteWidgetModal}
              >
                <FiTrash2 />
              </button>
              {isOpenedDeleteWidgetModal[`id${widget?.id}`] ? (
                <div className="delete-widget-confirm">
                  <h4 className="delete-widget-confirm__subtitle">
                    Are you sure you want to delete this widget ?
                  </h4>
                  <MdClose className="close" onClick={closeWidgetDeleteModal} />
                  <button
                    type="button"
                    onClick={handleDeleteWidget}
                    id={widget?.id}
                    className="classic-btn container-delete-confirm__btn"
                  >
                    delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
      <p className="widget__description">{widget?.description}</p>
      <ul className="widget__members">
        {members?.map((member) => (
          <li key={member.id} className="widget__member">
            <span className={`color-container--${member?.color}`}>
              {member.firstname[0]}
            </span>
          </li>
        ))}
      </ul>
      <Modal showModal={displayCreationModal}>
        <WidgetCreationForm
          hideWidgetCreationModal={hideWidgetCreationModal}
          widget={widget}
        />
      </Modal>
    </article>
  );
}

Widget.propTypes = {
  widget: PropTypes.object.isRequired,
  colorMember: PropTypes.shape({
    color: PropTypes.string,
  }),
  editWidget: PropTypes.func.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  copyWidgetToEdit: PropTypes.func.isRequired,
  showWidgetCreationModal: PropTypes.func.isRequired,
  hideWidgetCreationModal: PropTypes.func.isRequired,
  displayCreationModal: PropTypes.bool.isRequired,
  updateSelectedMember: PropTypes.func.isRequired,
  cleanSelectedMembers: PropTypes.func.isRequired,
  isOpenedDeleteWidgetModal: PropTypes.object.isRequired,
  openWidgetDeleteModal: PropTypes.func.isRequired,
  closeWidgetDeleteModal: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isEditor: PropTypes.bool.isRequired,
};

Widget.defaultProps = {
  colorMember: {},
};

export default Widget;
