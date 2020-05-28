import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

const PageLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {children}
      </main>
    </ThemeProvider>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageLayout
