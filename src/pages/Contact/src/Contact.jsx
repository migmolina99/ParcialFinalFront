import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Form from "../../../components/Form";
import TextField from "../../../components/TextField";
import Button from "../../../components/Button";
import Message from "../../../components/Message";
import useForm from "../../../hooks/useForm";
import { useApp } from "../../../context/AppContext";

const namespace = "contact-page";

const initialFormValues = {
  name: "",
  email: "",
};

const valideteForm = (form) => {
  let errors = {};

  if (form.name.trim().length < 3) {
    errors.name = "This field must have at least 3 characters";
  }

  if (form.email.trim().length < 6) {
    errors.email = "This field must have at least 6 characters";
  }

  return errors;
};

const Contact = ({ className }) => {
  const componentClassNames = classNames(namespace, className);
  const { theme } = useApp();
  const [userInfo, setUserInfo] = useState(null);

  const submitFunction = (form) => {
    if (!form.name || !form.email) return;
    console.log("Submit: ", form);
    setUserInfo(form);
  };

  const {
    name,
    email,
    errors,
    submited,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialFormValues, valideteForm, submitFunction);

  return (
    <main className={componentClassNames}>
      <h1 className={`${namespace}__title`}>Want to know more?</h1>
      <p className={`${namespace}__paragraph`}>
        Send us your questions and we will contact you
      </p>
      <Form title="Contact us" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={handleChange}
          onBlur={handleBlur}
          message={errors.name}
          modifier={errors.name && "error"}
        />
        <TextField
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
          message={errors.email}
          modifier={errors.email && "error"}
        />
        {submited && Object.keys(errors).length > 0 && (
          <Message type="error">Please verify your information again</Message>
        )}
        {submited && Object.keys(errors).length === 0 && (
          <Message type="success">
            Than you {userInfo.name}, we will contact you as soon as possible
            via email
          </Message>
        )}
        <Button
          type="submit"
          modifier={theme === "dark" ? "dark" : "primary"}
          disabled={Object.keys(errors).length > 0}
          fullWidth
        >
          Send
        </Button>
      </Form>
    </main>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

Contact.defaultProps = {
  className: "",
};

export default Contact;
