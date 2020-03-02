import React from 'react';
import styles from './project-screenshot.module.css';

function ProjectScreenshot({src, alt, caption, vertical, style}) {
  let classes;
  if (vertical) {
    classes = `${styles.vertical} ${styles.center} mb-2`
  } else {
    classes = `${styles.skinny} ${styles.center} mb-2`;
  }

  return (
    <div className='my-5'>
      <img className={classes} src={src} alt={alt} style={style}/>
      <h5 className='text-center'><i>{caption}</i></h5>
    </div>
  )
}

export default ProjectScreenshot;