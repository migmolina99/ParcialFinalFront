import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Spinner from "../../Spinner";

const namespace = "loading";

const Loading = ({ type, message, className }) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${type}`]: type,
  });

  return (
    <div className={componentClassNames}>
      <div className={`${namespace}__content`}>
        {message && <span className={`${namespace}__message`}>{message}</span>}
        <Spinner width="48px" height="48px" />
      </div>
    </div>
  );
};

Loading.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
};

Loading.defaultProps = {
  message: "",
  className: "",
};

export default Loading;
