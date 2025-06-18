export default function Timeline({ events }) {
  return (
    <ol className="relative border-l border-gray-300 dark:border-gray-700">
      {events.map((event, idx) => (
        <li key={idx} className="mb-8 ml-6">
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white dark:ring-gray-900">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          </span>
          <h3 className="font-semibold text-gray-900 dark:text-white">{event.title}</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{event.date}</time>
          <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">{event.description}</p>
        </li>
      ))}
    </ol>
  );
}
