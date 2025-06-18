import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

// Dynamically import Mermaid so it only loads on the client
const Mermaid = dynamic(() => import('react-mermaid2'), { ssr: false });

export default function DiagramEmbed({ chart, className = '' }) {
  if (!chart) return null;
  return (
    <div className={`my-6 overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded shadow ${className}`}>
      <Mermaid chart={chart} />
    </div>
  );
}

DiagramEmbed.propTypes = {
  chart: PropTypes.string.isRequired,
  className: PropTypes.string,
};
