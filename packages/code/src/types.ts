export interface CodeBlockProps {
  /**
   * The code content to display
   */
  code: string;
  
  /**
   * The programming language of the code
   * @default 'typescript'
   */
  language?: string;
  
  /**
   * Whether to show line numbers
   * @default false
   */
  showLineNumbers?: boolean;
  
  /**
   * Whether the code block is editable
   * @default false
   */
  editable?: boolean;
  
  /**
   * Callback when the code changes (only when editable is true)
   */
  onChange?: (newCode: string) => void;
}

export interface CodePreviewProps {
  /**
   * The code to preview/execute
   */
  code: string;
  
  /**
   * The dependencies required for the preview
   */
  dependencies?: Record<string, string>;
  
  /**
   * Additional CSS to apply to the preview
   */
  style?: React.CSSProperties;
  
  /**
   * Additional class names to apply to the preview container
   */
  className?: string;
}
