import React from 'react';

function BlogHeader({children, style}) {
  return (
    <h1 className='mt-5 mb-1 pl-2' style={style}>{children}</h1>
  )
}

export default BlogHeader;