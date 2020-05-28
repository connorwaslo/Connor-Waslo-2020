import React from 'react'
import { Grid } from 'semantic-ui-react'

function Project({ pic, title, description, link }) {
  return (
    <Grid stackable>
      <Grid.Column width={6}>
        <img src={pic} alt='project'/>
      </Grid.Column>
      <Grid.Column width={10}>

      </Grid.Column>
    </Grid>
  )
}

export default Project