import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import { ProjectTitle, ProjectBody, ProjectRef, ProjectLink } from "./typography"
import { minDevice } from "../utils/devices"
import theme from '../styles/theme'

const PicColumn = styled(Grid.Column).attrs(props => ({
  width: props.width
}))`
  text-align: left;
  max-width: 80vw;
  
  @media ${minDevice.tablet} {
    text-align: center;
  }
`

function Project({ pic, title, description, timeline, link, color, borderRadius }) {
  function renderLink() {
    if (link.substr(0, 1) === '/') {
      return <ProjectLink color={color} to={link}>Read More</ProjectLink>
    }

    return <ProjectRef color={color} href={link}>Read More</ProjectRef>
  }
  return (
    <Grid stackable style={{ marginBottom: theme.spacing(8) }}>
      <PicColumn width={6}>
        <img src={pic} alt='project' style={{ padding: 0, margin: 0, maxWidth: '80%', borderRadius: borderRadius ? borderRadius : 0 }}/>
      </PicColumn>
      <Grid.Column width={10}>
        <ProjectTitle>{title}</ProjectTitle>
        {timeline && <ProjectBody color={color} style={{ fontStyle: 'italic' }}>{timeline}</ProjectBody>}
        <ProjectBody color={color}>{description}</ProjectBody>
        {renderLink()}
      </Grid.Column>
    </Grid>
  )
}

export default Project