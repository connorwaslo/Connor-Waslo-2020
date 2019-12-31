import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"

function GoCode() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/iphone.png')}>
      <h1 className='display-3'>GoCode details coming soon...</h1>
    </LayoutProjectBlog>
  )
}

export default GoCode;