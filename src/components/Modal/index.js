import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classNames from 'classnames';

const Modal = ({ hideModal, children }) => {
  const classes = classNames('modal', { 'modal--hidden': hideModal });
  return (
    <div className={classes}>
      <div className="modal__content">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  hideModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
