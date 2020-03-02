import React, { useEffect } from 'react';
import Prism from 'prismjs';

function CodeSnippet({ code }) {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className='code-container'>
      <pre>
        <code className='language-'>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default CodeSnippet;