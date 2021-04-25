import React from 'react';

function Widget({ widget }) {
  const { members } = widget;

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
    </article>
  );
}

export default Widget;
