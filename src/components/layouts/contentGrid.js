import React from 'react'
import { Grid } from "semantic-ui-react"
import { MainTitle } from "../typography"
import { ContentContainer } from "../containers"

function ContentGrid({ title, titleWidth, children, style, childrenStyle }) {
  return (
    <ContentContainer style={style}>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={titleWidth ? titleWidth : 6}>
            <MainTitle>{title}</MainTitle>
          </Grid.Column>
          <Grid.Column width={titleWidth ? 16 - titleWidth : 10} style={childrenStyle}>
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ContentContainer>
  )
}

export default ContentGrid