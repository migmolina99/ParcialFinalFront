import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Toggle from '../../Toggle';
import { NavLink } from "react-router-dom";

const namespace = "navbar";

const NavBar = ({ className }) => {
  const componentClassNames = classNames(namespace, className);

  const onChangeTheme = (checked) => {
    console.log(checked);
  };

  return (
    <nav className={componentClassNames}>
      <ul className={`${namespace}-list`}>
        <li className={`${namespace}-list__item`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${namespace}-list__link ${
                isActive ? `${namespace}-list__link--active` : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li className={`${namespace}-list__item`}>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${namespace}-list__link ${
                isActive ? `${namespace}-list__link--active` : ""
              }`
            }
          >
            Favorites
          </NavLink>
        </li>
        <li className={`${namespace}-list__item`}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${namespace}-list__link ${
                isActive ? `${namespace}-list__link--active` : ""
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Toggle onChangeToggle={onChangeTheme} />
    </nav>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
};

NavBar.defaultProps = {
  className: "",
};

export default NavBar;
