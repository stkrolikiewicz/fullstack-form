import {Field} from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

export default ({name, label, errors, touched}) => {
  return (
    <FormControl isInvalid={!!errors[name] && touched[name]}>
      <FormLabel htmlFor="firstField">{label}</FormLabel>
      <Field as={Input} id={name} name={name} type="text" variant="filled" />
      <FormErrorMessage>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
};
