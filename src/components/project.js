import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { ProjectTitle, ProjectBody, ProjectRef, ProjectLink } from "./typography"
import { makeStyles } from "@material-ui/styles"
import { minDevice } from "../utils/devices"
import theme from '../styles/theme'

const ProjectImage = styled.img`
  max-width: 40%;
  margin: 0;
  padding: 0;
  
  @media ${minDevice.md} {
    max-width: 80%
  }
`

const useStyles = makeStyles({
  projectGrid: {
    margin: `${theme.spacing(8)} 0`
  }
})

function Project({ pic, title, description, timeline, link, color, borderRadius }) {
  const classes = useStyles()

  function renderLink() {
    if (link.substr(0, 1) === '/') {
      return <ProjectLink color={color} to={link}>Read More</ProjectLink>
    }

    return <ProjectRef color={color} href={link}>Read More</ProjectRef>
  }

  return (
    <Grid container spacing={4} className={classes.projectGrid}>
      <Grid item xs={12} md={4}>
        <ProjectImage src={pic} alt='project' style={{ borderRadius: borderRadius ? borderRadius: 0 }}/>
      </Grid>
      <Grid item xs={12} md={8}>
        <ProjectTitle>{title}</ProjectTitle>
        {timeline && <ProjectBody color={color} style={{ fontStyle: 'italic' }}>{timeline}</ProjectBody>}
        <ProjectBody color={color}>{description}</ProjectBody>
        {renderLink()}
      </Grid>
    </Grid>
  )
}

export default Project