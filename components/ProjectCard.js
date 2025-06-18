import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image, tags, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform"
      whileHover={{ scale: 1.04 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags && tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
