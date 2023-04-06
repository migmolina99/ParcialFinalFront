import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "footer";

const Footer = ({ className }) => {
  const componentClassNames = classNames(namespace, className);

  return (
    <footer className={componentClassNames}>
      <small>Made with ♥ by Miguel Molina</small>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
