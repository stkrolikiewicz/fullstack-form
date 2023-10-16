import {postAnswer} from '@/services/answers';
import {Formik} from 'formik';
import {Box, Button, VStack, Spinner, Heading} from '@chakra-ui/react';
import {FormControl as MyFormControl} from './_components';
import {validateField} from '@/utils';
import {useState} from 'react';
import {Alert as MyAlert} from '@/components';

export default ({title, fields, initialValues}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await postAnswer(values);
      setSuccess(true);
      resetForm();
    } catch (error) {
      setError(error || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="white" p={6} rounded="md" w={600}>
      {error && (
        <MyAlert
          status="error"
          title="Error submitting form:"
          description={error.message || 'Unknown error'}
          enterState={error}
        />
      )}
      {success && (
        <MyAlert
          status="success"
          title="Form submitted successfully!"
          description="Thank you for your submission."
          enterState={success}
          duration={5000}
        />
      )}
      {title && (
        <Heading as="h2" size="lg" mb={4} textAlign={'center'}>
          {title}
        </Heading>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => {
          handleSubmit(values, resetForm);
        }}
        validate={values => {
          const fieldNames = fields.map(field => field.name);

          const errors = fieldNames.reduce((acc, fieldName) => {
            return {
              ...acc,
              ...validateField(fieldName, values[fieldName]),
            };
          }, {});
          return errors;
        }}
      >
        {({handleSubmit, errors, touched}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              {fields.map(({name, label}) => (
                <MyFormControl
                  key={name}
                  name={name}
                  label={label}
                  errors={errors}
                  touched={touched}
                />
              ))}
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                disabled={loading}
              >
                {loading ? <Spinner /> : 'Submit'}
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};
