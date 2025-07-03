import React, { useState, useEffect } from 'react';
import { CodePreviewProps } from '../types';

/**
 * A component that renders a live preview of the provided code
 */
export const CodePreview: React.FC<CodePreviewProps> = ({
  code,
  dependencies = {},
  style = {},
  className = '',
}) => {
  const [error, setError] = useState<string | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  // Reset error when code changes
  useEffect(() => {
    setError(null);
    
    if (!iframeRef.current) return;
    
    try {
      // Get the iframe's document
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (!iframeDoc) return;
      
      // Clear the iframe
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                margin: 0;
                padding: 16px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                background-color: #fff;
                color: #333;
              }
              * { box-sizing: border-box; }
            </style>
          </head>
          <body>
            <div id="root"></div>
            <script type="module">
              // This is a simple implementation. In a real app, you'd want to use something like
              // react-live or code-sandbox for a more robust solution.
              try {
                ${Object.entries(dependencies)
                  .map(([pkg, version]) => `import ${pkg} from '${pkg}';`)
                  .join('\n')}
                
                const root = document.getElementById('root');
                ${code}
              } catch (err) {
                window.parent.postMessage({
                  type: 'preview-error',
                  error: err.message
                }, '*');
              }
            </script>
          </body>
        </html>
      `);
      iframeDoc.close();
      
      // Handle errors from the iframe
      const handleMessage = (event: MessageEvent) => {
        if (event.data.type === 'preview-error') {
          setError(event.data.error);
        }
      };
      
      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
      
    } catch (err) {
      setError('Failed to render preview');
      console.error('Preview error:', err);
    }
  }, [code, dependencies]);

  return (
    <div 
      className={`relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 ${className}`}
      style={{ ...style }}
    >
      <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          Preview
        </span>
      </div>
      
      <div className="relative">
        {error && (
          <div className="p-4 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20">
            <div className="font-medium mb-1">Error in preview:</div>
            <div className="font-mono text-xs">{error}</div>
          </div>
        )}
        
        <iframe
          ref={iframeRef}
          title="Code Preview"
          className="w-full h-full min-h-[200px] border-0"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};
