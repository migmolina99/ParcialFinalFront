import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "button";

const Button = ({ 
  type,
  size,
  modifier, 
  disabled,
  fullWidth, 
  onClick ,
  className,
  children,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${size}`]: size,
    [`${namespace}--${modifier}`]: modifier,
    [`${namespace}--disabled`]: disabled,
    [`${namespace}--fullWidth`]: fullWidth,
  });

  const handleClick = () => {
    if (disabled) return;
    onClick();
  }

  return (
    <button 
      type={type}
      className={componentClassNames} 
      disabled={disabled}
      onClick={handleClick}
    >
     { children }
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  modifier: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  type: "button",
  size: 'medium',
  modifier: 'primary',
  disabled: false,
};

export default Button;
