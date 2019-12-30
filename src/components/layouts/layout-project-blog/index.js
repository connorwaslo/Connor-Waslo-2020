import React from 'react';
import {Link} from 'gatsby';
import './layout-project-blog.module.css';

const BackArrow = () => (
  <Link to='/'>
    <div style={{position: 'absolute', top: '2.5vh', left: '2.5vw',
                width: '2.5vw', height: '2.5vh'}}>
      <img src={require('../../../images/vectors-icons/left-arrow.svg')}
           alt='<=' style={{width: 'auto', height: 'auto'}}/>
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