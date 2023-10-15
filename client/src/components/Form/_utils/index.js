export const validateField = (fieldName, fieldValue) => {
  const errors = {};

  if (!fieldValue) {
    errors[fieldName] = 'This answer is required';
  } else if (fieldValue.length < 2 || fieldValue.length > 70) {
    errors[fieldName] = 'This answer must be between 2 and 70 characters';
  }

  return errors;
};
