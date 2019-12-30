import React from 'react';

function BlogText({children, style}) {
  return (
    <h2 className='my-4' style={style}>{children}</h2>
  )
}

export default BlogText;