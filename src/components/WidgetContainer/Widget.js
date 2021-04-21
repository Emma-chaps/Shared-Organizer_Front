import React from 'react';

function Widget({ data }) {
  return (
    <article className="widget">
      <h2 className="widget__title">TITLE: {data.title}</h2>
      <p className="widget__description">DESCRIPTION: {data.description}</p>
      <p>MEMBERS : </p>
      <p>AUTHOR: {data.author}</p>
    </article>
  );
}

export default Widget;
