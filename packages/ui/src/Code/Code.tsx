interface CodeProps {
  children: string;
  language?: string;
  className?: string;
}

export function Code({ 
  children, 
  language = 'plain', 
  className = '' 
}: CodeProps) {
  return (
    <pre className={`rounded bg-gray-100 p-4 overflow-x-auto ${className}`}>
      <code className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
}
