import Head from 'next/head';
import Layout from '../components/Layout';
import TestimonialCard from '../components/TestimonialCard';

// Placeholder for when /utils/getContent.js is ready
export async function getStaticProps() {
  // Replace with: const testimonials = getTestimonials();
  return { props: { testimonials: [] } };
}

export default function Testimonials({ testimonials }) {
  return (
    <Layout>
      <Head>
        <title>Testimonials | Michael Gardesey</title>
        <meta name="description" content="Testimonials and recommendations for Michael Gardesey." />
      </Head>
      <section className="container mx-auto py-12" aria-labelledby="testimonials-title">
        <h1 id="testimonials-title" className="text-3xl font-bold mb-8">Testimonials</h1>
        {testimonials && testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(t => (
              <TestimonialCard key={t.name + t.title} {...t} />
            ))}
          </div>
        ) : (
          <div role="alert" className="text-gray-500 dark:text-gray-400">
            No testimonials available yet.
          </div>
        )}
      </section>
    </Layout>
  );
    }
