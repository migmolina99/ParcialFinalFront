import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "textfield";

const TextField = ({
  type,
  name,
  value,
  placeholder,
  modifier,
  message,
  cols,
  rows,
  onChange,
  onBlur,
  className,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${modifier}`]: modifier,
  });

  return (
    <div className={componentClassNames}>
      {type === "textarea" ? (
        <textarea 
          type={type}
          name={name}
          value={value}
          className={`${namespace}__textarea`}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          cols={cols}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          className={`${namespace}__input`}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      {message && <span className={`${namespace}__message`}>{message}</span>}
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  modifier: PropTypes.string,
  message: PropTypes.string,
  cols: PropTypes.string,
  rows: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TextField.defaultProps = {
  placeholder: "",
  modifier: "",
  message: "",
  cols: "30",
  rows: "5",
  className: "",
};

export default TextField;
