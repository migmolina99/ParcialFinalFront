import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Toggle from "../../Toggle";
import { NavLink } from "react-router-dom";
import { useApp } from "../../../context/AppContext";

const namespace = "navbar";

const NavBar = ({ className }) => {
  const componentClassNames = classNames(namespace, className);

  const { setAppTheme } = useApp();

  const onChangeTheme = (checked) => {
    setAppTheme(checked ? "dark" : "light");
  };

  return (
    <nav className={componentClassNames}>
      <div className={`${namespace}__left`}>
        <div className={`${namespace}__logo`}>
          <span className={`${namespace}__logo-text`}>DH Odonto</span>
        </div>
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
              to="/favs"
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
      </div>
      <div className={`${namespace}__right`}>
        <Toggle onChangeToggle={onChangeTheme} />
      </div>
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
