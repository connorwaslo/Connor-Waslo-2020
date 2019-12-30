import React from 'react';
import styles from './layout-parallax.module.css';

function LayoutParallax({children, bgImage}) {
  return (
    <div className={`text-center ${styles.parallaxHappyPlace} ${styles.fullHeight}`} style={{backgroundImage: bgImage}}>
      {children}
    </div>
  )
}

export default LayoutParallax;