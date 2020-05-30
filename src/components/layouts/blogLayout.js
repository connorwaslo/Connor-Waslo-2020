import React from 'react'
import { BlogContainer, Padding } from '../containers'
import { Grid } from '@material-ui/core'
import { ProjectBody, MainTitle } from "../typography"
import { ThemeProvider } from "styled-components"
import theme from '../../styles/theme'

function BlogLayout({ pic, title, timeline, description, footnote, borderRadius, children }) {
  return (
    <ThemeProvider theme={theme}>
      <BlogContainer>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img src={pic} alt='project' style={{ padding: 0, margin: 0, maxWidth: '80%', borderRadius: borderRadius ? borderRadius : 0 }}/>
            </Grid>
            <Grid item xs={12} md={8}>
              <MainTitle>{title}</MainTitle>
              <Padding vertical={theme.spacing(2)} horizontal={0}>
                {timeline && <ProjectBody style={{ fontStyle: 'italic' }}>{timeline}</ProjectBody>}
              </Padding>
              <Padding vertical={theme.spacing(2)} horizontal={0}>
                <ProjectBody>{description}</ProjectBody>
              </Padding>
            </Grid>
        </Grid>

        <Padding vertical={theme.spacing(24)} horizontal={0}>
          {children}
        </Padding>

        <img src={footnote} alt='Footnote' style={{ width: '5vh' }}/>
      </BlogContainer>
    </ThemeProvider>
  )
}

export default BlogLayout