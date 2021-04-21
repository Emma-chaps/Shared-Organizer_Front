import React from 'react';

function Widget({ widget }) {
  const { infos, attributedMembers } = widget;
  return (
    <article className="widget">
      <h2 className="widget__title">TITLE: {infos.title}</h2>
      <p className="widget__description">DESCRIPTION: {infos.description}</p>
      <p>MEMBERS :{attributedMembers.map((member) => member.firstname)}</p>
      <p>AUTHOR: {infos.author}</p>
    </article>
  );
}

export default Widget;
