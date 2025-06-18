import Head from 'next/head';
import Layout from '../components/Layout';

// Placeholder for when /utils/getContent.js is ready
export async function getStaticProps() {
  return { props: { speaking: [] } };
}

export default function Speaking({ speaking }) {
  return (
    <Layout>
      <Head>
        <title>Speaking | Michael Gardesey</title>
        <meta name="description" content="Talks, lectures, and academic contributions." />
      </Head>
      <section className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Speaking & Research</h1>
        <ul className="space-y-6">
          {speaking.length > 0 ? (
            speaking.map(talk => (
              <li key={talk.title} className="bg-white dark:bg-gray-800 p-6 rounded shadow">
                <h2 className="text-xl font-semibold">{talk.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{talk.description}</p>
                <span className="text-sm text-gray-500">{talk.date}</span>
              </li>
            ))
          ) : (
            <li>No speaking events available yet.</li>
          )}
        </ul>
      </section>
    </Layout>
  );
    }
