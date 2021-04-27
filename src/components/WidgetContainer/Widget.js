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
      <h2 className="widget__title">TITLE: {widget.title}</h2>
      <p className="widget__description">DESCRIPTION: {widget.description}</p>
      <ul className="widget__members">
        CONCERNED MEMBERS:
        {members?.map((member) => (
          <li key={member.id} className="widget__member">
            {member.firstname}
          </li>
        ))}
      </ul>
      <p className="widget__author">AUTHOR: {widget.author}</p>
      <button type="button" id={widget.id} onClick={handleEdit}>
        <FiEdit2 />
      </button>
      <button type="button" id={widget.id} onClick={handleDelete}>
        <FiTrash2 />
      </button>
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
