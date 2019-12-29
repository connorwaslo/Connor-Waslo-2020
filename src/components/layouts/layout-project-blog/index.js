import React from 'react';
import {Link} from 'gatsby';
import './layout-project-blog.module.css';

const BackArrow = () => (
  <Link to='/'>
    <div style={{position: 'absolute', top: '2.5vh', left: '2.5vw'}}>
      <h1>{'<='}</h1>
    </div>
  </Link>
)

function LayoutProjectBlog({children, style}) {
  return (
    <div className='container' style={style}>
      <BackArrow/>
      {children}
    </div>
  )
}

export default LayoutProjectBlog;