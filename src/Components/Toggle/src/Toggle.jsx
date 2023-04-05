import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "toggle";

const Toggle = ({ className, onChangeToggle }) => {
  const componentClassNames = classNames(namespace, className);
  const [checked, setChecked] = useState(false);

  const handleChange = ({ target }) => {
    setChecked(target.checked);
    onChangeToggle(target.checked);
  };

  return (
    <label className={componentClassNames} htmlFor="toggle">
      <input
        id="toggle"
        type="checkbox"
        className={`${namespace}__checkbox`}
        onChange={handleChange}
      />
      <span className={`${namespace}__check`}>
        <span className={`${namespace}__check-text`}>
          {/* {checked ? "OFF" : "ON"} */}
        </span>
      </span>
    </label>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
  onChangeToggle: PropTypes.func.isRequired
};

Toggle.defaultProps = {
  className: "",
};

export default Toggle;
