import React from 'react';
import styles from './corner-icon.module.css';

function CornerIcon({src, alt, style}) {
  return <img src={src} alt={alt} className={styles.cornerIcon} style={style}/>
}

export default CornerIcon;