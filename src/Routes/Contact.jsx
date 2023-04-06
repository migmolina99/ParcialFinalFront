import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "contact-page";

const Contact = ({ className }) => {
  const componentClassNames = classNames(namespace, className);

  return (
    <div className={componentClassNames}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      {/* <Form/> */}
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

Contact.defaultProps = {
  className: "",
};

export default Contact;
