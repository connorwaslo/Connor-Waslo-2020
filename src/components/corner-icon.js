import React from 'react';
import styles from './corner-icon.module.css';

export default ({src, alt}) => (
  <img src={src} alt={alt} className={styles.cornerIcon}/>
)