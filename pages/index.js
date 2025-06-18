import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NewsletterForm from '../components/NewsletterForm';
import ProjectCard from '../components/ProjectCard';

const featuredProjects = [
  {
    title: "AI Research Platform",
    description: "A platform for collaborative AI research.",
    image: "/images/ai-platform.jpg",
    tags: ["AI", "Platform", "Collaboration"],
    link: "https://github.com/Michael-Gardesey/ai-research-platform"
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Michael Gardesey | Home</title>
        <meta name="description" content="Home page of Michael Gardesey's portfolio." />
      </Head>
      <Hero />
      <section aria-labelledby="featured-projects" className="my-16">
        <h2 id="featured-projects" className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.length > 0 ? (
            featuredProjects.map(p => <ProjectCard key={p.title} {...p} />)
          ) : (
            <p>No featured projects yet.</p>
          )}
        </div>
      </section>
      <section aria-labelledby="newsletter" className="my-16">
        <h2 id="newsletter" className="text-2xl font-bold mb-6">Join the Newsletter</h2>
        <NewsletterForm />
      </section>
    </Layout>
  );
    }
