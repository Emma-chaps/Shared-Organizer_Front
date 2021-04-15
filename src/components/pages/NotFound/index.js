import React from 'react';
// import Img404 from 'public/img/404.jpg'
import Img404 from './404.jpg'
import "./styles.scss";

const Error = () => {
  return (
    <div className="error"
        title="Erreur">
          {/* 
        <img className="error__image"
        src={Img404} alt="404" />*/}
        <h1 className="error__title">
        "A Une erreur s'est produite."
        </h1>
    </div>
  );
}

export default Error;