import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"

function TreeHacks() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/apple.jpg')}>
      <h1 className='display-3'>TreeHacks 2019 project details coming soon...</h1>
    </LayoutProjectBlog>
  )
}

export default TreeHacks;