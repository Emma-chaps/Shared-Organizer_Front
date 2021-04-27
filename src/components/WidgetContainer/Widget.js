import React, { useState } from 'react';
import Modal from 'src/components/Modal';
import WidgetCreationForm from 'src/containers/forms/WidgetCreationForm';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

function Widget({ widget, editWidget, deleteWidget, copyWidgetToEdit }) {
  const [displayEdit, setDisplayEdit] = useState(false);
  const { members } = widget;
  const handleEdit = (event) => {
    copyWidgetToEdit(widget, members);
    // editWidget(widget);
    setDisplayEdit(true);
  };
  const handleDelete = (event) => {
    deleteWidget(widget);
  };
  const handleExitModal = () => {
    setDisplayEdit(false);
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
      <Modal showModal={displayEdit} hideModal={handleExitModal}>
        <WidgetCreationForm widget={widget} />
      </Modal>
    </article>
  );
}

export default Widget;
