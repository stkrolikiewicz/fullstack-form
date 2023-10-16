export const validateField = (fieldName, fieldValue) => {
  const errors = {};

  if (!fieldValue) {
    errors[fieldName] = 'This answer is required';
  } else if (fieldValue.length < 2 || fieldValue.length > 150) {
    errors[fieldName] = 'This answer must be between 2 and 150 characters';
  }

  return errors;
};
