import React from 'react';
import TileBackground from "../tile-background"
import ProjectTile from "../project-tile"
import './project.module.css';

function Project({colSize, img, title}) {
  let col = 'col-md-' + colSize;
  const classes = col + ' project';

  return (
    <div className={classes}>
      <TileBackground>
        <ProjectTile img={img} title={title}/>
      </TileBackground>
    </div>
  )
};

export default Project;