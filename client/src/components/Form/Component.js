import {postAnswer} from '@/services/answers';
import {Formik} from 'formik';
import {Box, Button, VStack, Spinner} from '@chakra-ui/react';
import {FormControl as MyFormControl} from './_components';
import {fields, initialValues} from './_constants';
import {validateField} from './_utils';
import {useState} from 'react';
import {Alert as MyAlert} from '@/components';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    setError(null);
    try {
      await postAnswer(values);
      resetForm();
    } catch (error) {
      setError(error || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="white" p={6} rounded="md" w={64}>
      {error && (
        <MyAlert
          status="error"
          title="Error submitting form:"
          description={error.message || 'Unknown error'}
        />
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
