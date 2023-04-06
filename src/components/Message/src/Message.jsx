import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import icons from "../../icons";

const namespace = "message";

const Message = ({ type, className, children }) => {
  const { Check, Warning } = icons;
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${type}`]: type,
  });

  return (
    <div className={componentClassNames}>
      <span className={`${namespace}__icon`}>
        {type === "success" ? <Check /> : <Warning />}
      </span>
      <span className={`${namespace}__text`}>{children}</span>
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

Message.defaultProps = {
  type: "neutral",
  className: "",
};

export default Message;
