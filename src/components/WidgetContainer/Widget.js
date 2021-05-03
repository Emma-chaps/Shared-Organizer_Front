import React, { useState, useEffect } from 'react';
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
        <span className={`name-tag icon-container--${colorMember?.icon}`}>
          {widget?.author[0]}
        </span>
        <header className="widget-header">
          <h2 className="widget__title">{widget?.title}</h2>
          <p className="widget__author">Added by {widget?.author}</p>{' '}
        </header>
        <div className="edit-delete-btns positioned-parent">
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
        </div>
      </div>
      <p className="widget__description">{widget?.description}</p>
      <ul className="widget__members">
        {members?.map((member) => (
          <li key={member.id} className="widget__member">
            <span className={`icon-container--${member?.icon}`}>
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

export default Widget;
