import React from "react";
import PropTypes from "prop-types";

const namespace = "form";

const Form = ({ 
  title,
  onSubmit,
  children,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className={namespace} onSubmit={handleSubmit}>
      <h2 className={`${namespace}__title`}>
        { title }
      </h2>
      { children }
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
