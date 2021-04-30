import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import classNames from 'classnames';

const Modal = ({ showModal, children, hideModal }) => {
  const classes = classNames('modal', { 'modal--hidden': !showModal });

  return (
    <div className={classes}>
      <div className="modal__header">
        <MdClose className="close" onClick={hideModal} />
      </div>
      <div className="modal__content">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  showModal: false,
};

export default Modal;
