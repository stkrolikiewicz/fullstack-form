import Head from 'next/head';
import {useEffect, useState} from 'react';
import {getAnswers} from '@/services/answers';
import {Progress} from '@chakra-ui/react';
import {Alert as MyAlert, AnswersList} from '@/components';
import {RepeatIcon} from '@chakra-ui/icons';

export const getServerSideProps = async () => {
  try {
    const {data} = await getAnswers();
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching answers:', error);
    return {
      props: {
        error: {
          message: error.message || 'Unknown error',
        },
      },
    };
  }
};

export default function Home({data, error}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      console.log(data);
      setLoading(false);
    } else if (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  }, [data, error]);

  return (
    <>
      <Head>
        <title>Provided answers</title>
        <meta name="description" content="Provided answers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error && (
        <MyAlert
          status="error"
          title="Error loading data:"
          description={error.message || 'Unknown error'}
          enterState={error}
          disappear={false}
          action={() => {
            window.location.reload();
          }}
          buttonColorScheme="red"
          buttonContent="Reload the page"
          buttonIcon={<RepeatIcon />}
        />
      )}
      <main>
        {loading && <Progress size="xs" isIndeterminate />}
        {data && <AnswersList data={data} />}
      </main>
    </>
  );
}
