import React from 'react';
import styles from './corner-icon.module.css';

function CornerIcon({src, alt}) {
  return <img src={src} alt={alt} className={styles.cornerIcon}/>
}

export default CornerIcon;