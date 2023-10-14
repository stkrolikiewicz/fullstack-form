import Head from 'next/head';
import {useEffect, useState} from 'react';
import {getAnswers} from '@/services/answers';

export const getServerSideProps = async () => {
  const {data} = await getAnswers();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default function Home({data}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(data);
    setLoading(false);
  }, [data]);

  return (
    <>
      <Head>
        <title>Provided answers</title>
        <meta name="description" content="Provided answers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Provided answers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data &&
              data.map(item => <li key={item._id}>{item.firstField}</li>)}
          </ul>
        )}
      </main>
    </>
  );
}
