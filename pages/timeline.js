import Head from 'next/head';
import Layout from '../components/Layout';
import Timeline from '../components/Timeline';
// Placeholder until /content/timeline.json is available
let timelineData = [];
try {
  // This will work when /content/timeline.json exists and is importable
  // timelineData = require('../content/timeline.json');
} catch (e) {
  timelineData = [];
}

export default function TimelinePage() {
  return (
    <Layout>
      <Head>
        <title>Timeline | Michael Gardesey</title>
        <meta name="description" content="Career, education, and achievements timeline of Michael Gardesey." />
      </Head>
      <section className="container mx-auto py-12" aria-labelledby="timeline-title">
        <h1 id="timeline-title" className="text-3xl font-bold mb-8">Timeline</h1>
        {timelineData && timelineData.length > 0 ? (
          <Timeline events={timelineData} />
        ) : (
          <div role="alert" className="text-gray-500 dark:text-gray-400">
            No timeline data available yet.
          </div>
        )}
      </section>
    </Layout>
  );
    }
