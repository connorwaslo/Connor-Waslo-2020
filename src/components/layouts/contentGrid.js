import React from 'react'
import { Grid } from '@material-ui/core'
import { MainTitle } from "../typography"
import { ContentContainer } from "../containers"

function ContentGrid({ title, children, style, childrenStyle }) {
  return (
    <ContentContainer style={style}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <MainTitle>{title}</MainTitle>
        </Grid>
        <Grid item xs={12} md={8} style={childrenStyle}>
          {children}
        </Grid>
      </Grid>
    </ContentContainer>
  )
}

export default ContentGrid