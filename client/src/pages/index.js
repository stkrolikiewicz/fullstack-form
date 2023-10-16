import Head from 'next/head';
import {Form as MyForm, Layout} from '@/components';
import {title, fields, initialValues} from '@/constants';
export default function App() {
  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="description" content="Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MyForm title={title} fields={fields} initialValues={initialValues} />
      </Layout>
    </>
  );
}
