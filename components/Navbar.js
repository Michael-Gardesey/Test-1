import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-xl">Michael Gardesey</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/speaking">Speaking</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/testimonials">Testimonials</Link>
        <a href="/cv.pdf" download className="underline">CV</a>
      </div>
      <DarkModeToggle />
    </nav>
  );
    }
