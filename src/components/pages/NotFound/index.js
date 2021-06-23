import React from "react";

import "./styles.scss";

const NotFound = () => {
  return (
    <div className="container-404">
      <h1 className="container-404__title">404</h1>
      <h2 className="container-404__content">Page not found</h2>
      <Link to="/">
        <button type="button" className="classic-btn">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
