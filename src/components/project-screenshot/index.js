import React from 'react';
import styles from './project-screenshot.module.css';

function ProjectScreenshot({src, alt, caption, style}) {
  return (
    <div className='my-5'>
      <img className={`${styles.skinny} ${styles.center} mb-2`} src={src} alt={alt} style={style}/>
      <h5 className='text-center'><i>{caption}</i></h5>
    </div>
  )
}

export default ProjectScreenshot;