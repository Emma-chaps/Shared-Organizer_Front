import React from 'react';

function Info({ info }) {
  if (info?.wikipedia?.length) {
    console.log(info.wikipedia[0]);
  }
  return (
    <div className="info-container__info">
      <p className="info-description">
        <span>On this day, in {info?.year} : </span>
        {info?.description}
      </p>
      {info?.wikipedia?.length && (
        <p className="info-link">
          <a
            href={info?.wikipedia[0].wikipedia}
            rel="noreferrer"
            target="_blank"
          >
            Get more info
          </a>
        </p>
      )}
    </div>
  );
}

export default Info;
