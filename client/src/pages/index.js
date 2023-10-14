import Head from 'next/head';
import {postAnswer} from '@/services/answers';
import {Formik, Field} from 'formik';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';

export default function App() {
  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="description" content="Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
          <Box bg="white" p={6} rounded="md" w={64}>
            <Formik
              initialValues={{
                firstField: '',
                secondField: '',
                thirdField: '',
                fourthField: '',
              }}
              onSubmit={values => {
                postAnswer(values);
              }}
              validate={values => {
                const errors = {};

                if (!values.firstField) {
                  errors.firstField = 'This answer is required';
                } else if (
                  values.firstField.length < 2 ||
                  values.firstField.length > 70
                ) {
                  errors.firstField =
                    'This answer must be between 2 and 70 characters';
                }

                if (!values.secondField) {
                  errors.secondField = 'This answer is required';
                } else if (
                  values.secondField.length < 2 ||
                  values.secondField.length > 70
                ) {
                  errors.secondField =
                    'This answer must be between 2 and 70 characters';
                }

                if (!values.thirdField) {
                  errors.thirdField = 'This answer is required';
                } else if (
                  values.thirdField.length < 2 ||
                  values.thirdField.length > 70
                ) {
                  errors.thirdField =
                    'This answer must be between 2 and 70 characters';
                }

                if (!values.fourthField) {
                  errors.fourthField = 'This answer is required';
                } else if (
                  values.fourthField.length < 2 ||
                  values.fourthField.length > 70
                ) {
                  errors.fourthField =
                    'This answer must be between 2 and 70 characters';
                }

                return errors;
              }}
            >
              {({handleSubmit, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl
                      isInvalid={!!errors.firstField && touched.firstField}
                    >
                      <FormLabel htmlFor="firstField">First Field</FormLabel>
                      <Field
                        as={Input}
                        id="firstField"
                        name="firstField"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.firstField}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.secondField && touched.secondField}
                    >
                      <FormLabel htmlFor="secondField">Second Field</FormLabel>
                      <Field
                        as={Input}
                        id="secondField"
                        name="secondField"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.secondField}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.thirdField && touched.thirdField}
                    >
                      <FormLabel htmlFor="thirdField">Third Field</FormLabel>
                      <Field
                        as={Input}
                        id="thirdField"
                        name="thirdField"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.thirdField}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.fourthField && touched.fourthField}
                    >
                      <FormLabel htmlFor="fourthField">Fourth Field</FormLabel>
                      <Field
                        as={Input}
                        id="fourthField"
                        name="fourthField"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.fourthField}</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" colorScheme="purple" width="full">
                      Submit
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </Box>
        </Flex>
      </main>
    </>
  );
}
