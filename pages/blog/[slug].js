import Head from 'next/head';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import Layout from '../../components/Layout';

// Placeholder for dynamic import
const DiagramEmbed = dynamic(() => import('../../components/DiagramEmbed'), { ssr: false });

export default function BlogPost({ source, frontMatter }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Layout><div>Loading…</div></Layout>;
  }
  if (!frontMatter) {
    return <Layout><div>Post not found.</div></Layout>;
  }

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title || 'Blog Post'} | Michael Gardesey</title>
        <meta name="description" content={frontMatter.excerpt || 'Blog post'} />
      </Head>
      <article className="prose dark:prose-invert mx-auto py-12">
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...source} components={{ DiagramEmbed }} />
        {/* Comments section (Utterances or similar) can go here */}
      </article>
    </Layout>
  );
}

// These are placeholders. Implement when /utils/mdx.js and /content/blog/ are ready.
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
export async function getStaticProps() {
  return { props: { source: null, frontMatter: null } };
}
