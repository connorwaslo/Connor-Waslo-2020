import React from 'react';
import {Link} from 'gatsby';

const BackArrow = () => (
  <Link to='/'>
    <div style={{position: 'fixed', top: '2.5vh', left: '2vw',
                width: '2.5vw', height: '2.5vh'}}>
      <img src={require('../../../images/vectors-icons/left-arrow.svg')}
           alt='<=' style={{width: 'auto', height: 'auto'}}/>
    </div>
  </Link>
)

function LayoutProjectBlog({children, footnote, style}) {
  return (
    <div className='container pb-5 mb-5' style={style}>
      <BackArrow/>
      {children}
      <img className='mt-5' src={footnote} alt={''} style={{width: '10vh', height: '10vh'}}/>
    </div>
  )
}

export default LayoutProjectBlog;