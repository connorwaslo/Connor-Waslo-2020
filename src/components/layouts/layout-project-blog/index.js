import React from 'react';
import {Link} from 'gatsby';
import styles from './layout-project-blog.module.css';

const BackArrow = () => (
  <Link to='/'>
    <div className={styles.backArrow}>
      <img src={require('../../../images/vectors-icons/left-arrow.svg')}
           alt='<=' style={{width: 'auto', height: 'auto'}}/>
    </div>
  </Link>
)

function LayoutProjectBlog({children, footnote, style}) {
  return (
    <div className={`container pb-5 mb-5 ${styles.blogMargins}`} style={style}>
      <BackArrow/>
      {children}
      <img className='mt-5' src={footnote} alt={''} style={{width: '10vh', height: '10vh'}}/>
    </div>
  )
}

export default LayoutProjectBlog;