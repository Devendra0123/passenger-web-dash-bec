import { useState } from 'react';

const useForm = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when the input value changes
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, submit the form
      // You can add your submit logic here
      console.log('Form submitted:', formData);
    } else {
      // If there are validation errors, update the errors state
      setErrors(validationErrors);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useForm;
