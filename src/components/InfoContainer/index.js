import React from 'react';
import Info from './Info';

function InfoContainer({ event, birth, death }) {
  return (
    <div className="info-container">
      <h2 className="info-container__title">Event</h2>
      <Info info={event} />

      <h2 className="info-container__title">Birth</h2>
      <Info info={birth} />

      <h2 className="info-container__title">Death</h2>
      <Info info={death} />
    </div>
  );
}

export default InfoContainer;
