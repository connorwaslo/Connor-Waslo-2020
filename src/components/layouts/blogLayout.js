import React from 'react'
import { BlogContainer, Padding } from '../containers'
import { Grid } from 'semantic-ui-react'
import { ProjectBody, MainTitle } from "../typography"
import { ThemeProvider } from "styled-components"
import theme from '../../styles/theme'

function BlogLayout({ pic, title, timeline, description, borderRadius, children }) {
  return (
    <ThemeProvider theme={theme}>
      <BlogContainer>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <img src={pic} alt='project' style={{ padding: 0, margin: 0, maxWidth: '80%', borderRadius: borderRadius ? borderRadius : 0 }}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <MainTitle>{title}</MainTitle>
              <Padding vertical={theme.spacing(2)} horizontal={0}>
                {timeline && <ProjectBody style={{ fontStyle: 'italic' }}>{timeline}</ProjectBody>}
              </Padding>
              <Padding vertical={theme.spacing(2)} horizontal={0}>
                <ProjectBody>{description}</ProjectBody>
              </Padding>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Padding vertical={theme.spacing(24)} horizontal={0}>
          {children}
        </Padding>
      </BlogContainer>
    </ThemeProvider>
  )
}

export default BlogLayout