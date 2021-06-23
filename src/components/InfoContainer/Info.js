import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ info }) => (
  <div className="info-container__info">
    <p className="info-description">
      <span>On this day, in {info?.year} : </span>
      {info?.description}
    </p>
    {info?.wikipedia?.length && (
      <p className="info-link">
        <a href={info?.wikipedia[0].wikipedia} rel="noreferrer" target="_blank">
          Get more info
        </a>
      </p>
    )}
  </div>
);

Info.propTypes = {
  info: PropTypes.object.isRequired,
};

Info.defaultProps = {};

export default Info;
