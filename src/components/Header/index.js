import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiCalendar, FiSettings, FiUser } from 'react-icons/fi';

import './styles.scss';
import classNames from 'classnames';

export default function Header({ groupName, logout, isAdmin }) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const hideSettingsMenu = classNames('header__settings-menu__modal', {
    'header__settings-menu__modal--is-hidden': !displayMenu,
  });

  const handleClick = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <header className="header">
      <div className="header__main-menu">
        <h1>Shared Organizer</h1>
        <NavLink to="/dashboard">
          <div className="">
            Dashboard <FiCalendar />
          </div>
        </NavLink>
      </div>
      <div>{groupName}</div>
      <div className="header__settings-menu">
        <FiUser onClick={handleClick} className="header__settings-menu__user" />
        <div className={hideSettingsMenu}>
          <div className="settings-btn">
            {isAdmin && (
              <NavLink to="/group-settings">
                <span className="settings-btn__name">Settings</span>
                <FiSettings className="settings-btn__icon" />
              </NavLink>
            )}
            <div onClick={logout} className="disconnect-btn">
              Disconnect
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
