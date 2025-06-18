import Head from 'next/head';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Placeholder for when /utils/getContent.js is ready
export async function getStaticProps() {
  return { props: { projects: [] } };
}

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Projects | Michael Gardesey</title>
        <meta name="description" content="Projects by Michael Gardesey" />
      </Head>
      <section className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        ) : (
          <p>No projects available yet.</p>
        )}
      </section>
    </Layout>
  );
    }
