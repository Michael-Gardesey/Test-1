export default function TestimonialCard({ name, title, text, image }) {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />
      <p className="italic mb-2">"{text}"</p>
      <div className="text-sm text-gray-600 dark:text-gray-300">{name}, {title}</div>
    </div>
  );
}
