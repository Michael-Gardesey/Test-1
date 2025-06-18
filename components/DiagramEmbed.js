import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

// Dynamically import Mermaid so it only loads on the client
const Mermaid = dynamic(() => import('react-mermaid2'), { ssr: false });

// Error boundary for Mermaid rendering issues
function DiagramErrorBoundary({ children }) {
  const [error, setError] = useState(null);

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded">
        <strong>Diagram Error:</strong> {error.toString()}
      </div>
    );
  }

  return (
    <ErrorCatcher setError={setError}>
      {children}
    </ErrorCatcher>
  );
}

class ErrorCatcher extends React.Component {
  componentDidCatch(error) {
    this.props.setError(error);
  }
  render() {
    return this.props.children;
  }
}

export default function DiagramEmbed({ chart, className = '', ariaLabel = 'Embedded diagram' }) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Custom Mermaid theme based on site theme
  const mermaidTheme = theme === 'dark' ? 'dark' : 'default';

  // Handle loading state for dynamic import
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (!chart) return null;

  return (
    <section
      role="figure"
      aria-label={ariaLabel}
      className={`my-6 overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded shadow ${className}`}
    >
      {isLoading ? (
        <div className="flex justify-center p-6">
          <ClipLoader size={30} color={theme === 'dark' ? '#fff' : '#333'} />
        </div>
      ) : (
        <DiagramErrorBoundary>
          <Mermaid chart={chart} config={{ theme: mermaidTheme }} />
        </DiagramErrorBoundary>
      )}
    </section>
  );
}

DiagramEmbed.propTypes = {
  chart: PropTypes.string.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};
