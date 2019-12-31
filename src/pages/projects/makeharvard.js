import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"

function MakeHarvard() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/pen.jpg')}>
      <h1 className='display-3'>MakeHarvard 2019 project details coming soon...</h1>
    </LayoutProjectBlog>
  )
}

export default MakeHarvard;