import React, { useState, useRef, useEffect } from 'react';
import { CodeBlockProps } from '../types';

/**
 * A code block component with syntax highlighting and copy functionality
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  showLineNumbers = false,
  editable = false,
  onChange,
}) => {
  const [copied, setCopied] = useState(false);
  const [localCode, setLocalCode] = useState(code);
  const codeRef = useRef<HTMLPreElement>(null);

  // Update local code when prop changes
  useEffect(() => {
    setLocalCode(code);
  }, [code]);

  const handleCopy = () => {
    if (!codeRef.current) return;
    
    // Get the text content from the pre element
    const textToCopy = codeRef.current.textContent || '';
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setLocalCode(newCode);
    if (onChange) {
      onChange(newCode);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-800 text-gray-200 text-sm">
      <div className="flex justify-between items-center bg-gray-900 px-4 py-2">
        <span className="text-xs text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-white transition-colors"
          title={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      
      <div className="p-4 overflow-auto">
        {editable ? (
          <textarea
            value={localCode}
            onChange={handleChange}
            className="w-full h-full bg-transparent font-mono outline-none resize-none"
            style={{ minHeight: '100px' }}
            spellCheck="false"
          />
        ) : (
          <pre ref={codeRef} className="m-0 p-0 font-mono">
            <code className={`language-${language}`}>{localCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
};
