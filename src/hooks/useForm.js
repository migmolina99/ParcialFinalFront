import { useState } from "react";

const useForm = (initialValues, validateForm, submitFunction) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = () => {
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      submitFunction(form);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm(initialValues);
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    ...form,
  };
};

export default useForm;
