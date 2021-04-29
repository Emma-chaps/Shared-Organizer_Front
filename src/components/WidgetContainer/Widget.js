import React, { useState, useEffect } from 'react';
import Modal from 'src/components/Modal';
import WidgetCreationForm from 'src/containers/forms/WidgetCreationForm';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

function Widget({
  widget,
  editWidget,
  deleteWidget,
  copyWidgetToEdit,
  showWidgetCreationModal,
  hideWidgetCreationModal,
  displayCreationModal,
}) {
  const [displayEdit, setDisplayEdit] = useState(false);

  const { members } = widget;
  const handleEdit = () => {
    copyWidgetToEdit(widget, members);
    showWidgetCreationModal();
    setDisplayEdit(true);
  };
  const handleDelete = (event) => {
    deleteWidget(event.currentTarget.id);
  };

  return (
    <article className="widget">
      <div className="visible-collapsed">
        <span className="name-tag">{widget.author[0]}</span>
        <header className="widget-header">
          <h2 className="widget__title">{widget.title}</h2>
          <p className="widget__author">Added by {widget.author}</p>{' '}
        </header>
        <div className="edit-delete-btns">
          <button
            type="button"
            className="button-change button-edit"
            id={widget.id}
            onClick={handleEdit}
          >
            <FiEdit2 />
          </button>
          <button
            type="button"
            className="button-change button-delete"
            id={widget.id}
            onClick={handleDelete}
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
      <p className="widget__description">{widget.description}</p>
      <ul className="widget__members">
        {members?.map((member) => (
          <li key={member.id} className="widget__member">
            <span className="name-tag">{member.firstname[0]}</span>
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
