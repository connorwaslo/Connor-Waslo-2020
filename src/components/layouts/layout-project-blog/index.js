import React from 'react';
import {Link} from 'gatsby';
import { ContentContainer } from "../../containers"
import styles from './layout-project-blog.module.css';
import { ThemeProvider } from "styled-components"
import theme from '../../../styles/theme'

const BackArrow = () => (
  <Link to='/'>
    <div className={styles.backArrow}>
      <img src={require('../../../images/vectors-icons/left-arrow.svg')}
           alt='<=' style={{width: 'auto', height: 'auto'}}/>
    </div>
  </Link>
)

function LayoutProjectBlog({children, footnote, style}) {
  return (
    <ThemeProvider theme={theme}>
      <ContentContainer style={style}>
        <BackArrow/>
        {children}
        <img src={footnote} alt={''} style={{width: '10vh', height: '10vh'}}/>
      </ContentContainer>
    </ThemeProvider>
  )
}

export default LayoutProjectBlog;