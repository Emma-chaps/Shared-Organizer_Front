import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import classNames from 'classnames';

const Modal = ({ showModal, children, hideModal }) => {
  const classes = classNames('modal', { 'modal--hidden': !showModal });

  return (
    <div className={classes}>
      <div className="modal__container">
        <div className="modal__container__header">
          <MdClose className="close" onClick={hideModal} />
        </div>
        <div className="modal__container__content">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func,
};

Modal.defaultProps = {
  showModal: false,
  hideModal: () => {},
};

export default Modal;
