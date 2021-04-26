import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import classNames from 'classnames';

const Modal = ({ showModal, children, hideModal }) => {
  const classes = classNames('modal', { 'modal--hidden': !showModal });

  return (
    <div className={classes}>
      <div className="modal__header">
        <div className="close" onClick={hideModal}></div>
      </div>
      <div className="modal__content">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
