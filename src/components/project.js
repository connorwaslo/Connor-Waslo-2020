import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import { ProjectTitle, ProjectBody, ProjectLink } from "./typography"
import { minDevice } from "../utils/devices"

const PicColumn = styled(Grid.Column).attrs(props => ({
  width: props.width
}))`
  text-align: left;
  
  @media ${minDevice.tablet} {
    text-align: center;
  }
`

function Project({ pic, title, description, timeline, link, color }) {
  return (
    <Grid stackable>
      <PicColumn width={6}>
        <img src={pic} alt='project' style={{ padding: 0, margin: 0 }}/>
      </PicColumn>
      <Grid.Column width={10}>
        <ProjectTitle>{title}</ProjectTitle>
        {timeline && <ProjectBody color={color} style={{ fontStyle: 'italic' }}>{timeline}</ProjectBody>}
        <ProjectBody color={color}>{description}</ProjectBody>
        <ProjectLink color={color} href={link}>Read More</ProjectLink>
      </Grid.Column>
    </Grid>
  )
}

export default Project