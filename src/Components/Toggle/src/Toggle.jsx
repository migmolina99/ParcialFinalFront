import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "toggle";

const Toggle = ({ className }) => {
  const componentClassNames = classNames(namespace, className);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {};

  return (
    <label class={componentClassNames} for="toggle">
      <input id="toggle" type="checkbox" className={`${namespace}__checkbox`} />
      <span className={`${namespace}__check`}>
        <span className={`${namespace}__check-text`}>
          {checked ? "OFF" : "ON"}
        </span>
      </span>
    </label>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
};

Toggle.defaultProps = {
  className: "",
};

export default Toggle;
