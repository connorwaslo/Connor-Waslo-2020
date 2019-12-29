import React from 'react';
import styles from './project-tile.module.css';

function ProjectTile({img, title}) {
  return (
    <div>
      <img src={img} alt='project-image' className={styles.projectImage}/>
      <h1 className='text-center'>{title}</h1>
    </div>
  )
}

export default ProjectTile;