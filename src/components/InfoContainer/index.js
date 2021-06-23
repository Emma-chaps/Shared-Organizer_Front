import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';

const InfoContainer = ({ event, birth, death }) => (
  <div className="info-container">
    <h2 className="info-container__title">Event</h2>
    <Info info={event} />

    <h2 className="info-container__title">Birth</h2>
    <Info info={birth} />

    <h2 className="info-container__title">Death</h2>
    <Info info={death} />
  </div>
);

InfoContainer.propTypes = {
  event: PropTypes.object.isRequired,
  birth: PropTypes.object.isRequired,
  death: PropTypes.object.isRequired,
};

InfoContainer.defaultProps = {};

export default InfoContainer;
