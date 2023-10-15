import Head from 'next/head';
import {Flex} from '@chakra-ui/react';
import {Form as MyForm} from '@/components';

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
          <MyForm />
        </Flex>
      </main>
    </>
  );
}
