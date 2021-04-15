import React from 'react';
// import Img404 from 'public/img/404.jpg'
// import Img404 from './404.jpg'
import "./styles.scss";

const Error = () => {
  return (
    <div className="error"
        title="Erreur">
         
                <h1 className="error__title">
        "Ah ! Une erreur s'est produite."
        </h1>  {/* 
        <img className="error__image"
        src={Img404} alt="404" />*/} 

    </div>
  );
}

export default Error;