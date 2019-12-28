import React from 'react';
import styles from './fullheight.module.css';

function FullHeight({children, bgColor}) {
  if (bgColor === '' || !bgColor) {
    bgColor = 'white';
  }

  return (
    <div className={styles.fullHeight} style={{backgroundColor: bgColor}}>
      {children}
    </div>
  )
}

export default FullHeight;