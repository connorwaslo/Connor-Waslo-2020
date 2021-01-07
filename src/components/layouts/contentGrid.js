import React from 'react'
import { Grid } from '@material-ui/core'
import { MainTitle, ProjectBody } from "../typography"
import { ContentContainer } from "../containers"

function ContentGrid({ title, subtitle, children, style, childrenStyle }) {
  return (
    <ContentContainer style={style}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <MainTitle>{title}</MainTitle>
          {subtitle && <ProjectBody style={{ lineHeight: 1.4 }}>{subtitle}</ProjectBody>}
        </Grid>
        <Grid item xs={12} md={8} style={childrenStyle}>
          {children}
        </Grid>
      </Grid>
    </ContentContainer>
  )
}

export default ContentGrid