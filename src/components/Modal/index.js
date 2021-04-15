import React from 'react';
import PropTypes from 'prop-types';
import WidgetCreationForm from '../forms/WidgetCreationForm';
import './styles.scss';
import classNames from 'classnames';

const Modal = ({ hideModal, children }) => {
  const classes = classNames('modal', { 'modal--hidden': hideModal });
  return <div className={classes}>{children}</div>;
};

Modal.propTypes = {
  hideModal: PropTypes.bool.isRequired,
};

export default Modal;
