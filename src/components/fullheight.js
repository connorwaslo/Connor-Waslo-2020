import React from 'react';
import styles from './fullheight.module.css';

export default ({children}) => (
  <div className={styles.fullHeight}>
    {children}
  </div>
)