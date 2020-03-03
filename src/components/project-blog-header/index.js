import React from 'react';
import styles from './project-blog-header.module.css';

// Todo: When the screen is small, decrease the size of the project image
function ProjectBlogHeader({children, img, alt}) {
  return (
    <React.Fragment>
      <div className='row my-5'>
        <div className='col-md-4 my-3'>
          <img src={img} alt={alt} className={`${styles.image} ${styles.center}`}/>
        </div>
        <div className='col-md-8'>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectBlogHeader;