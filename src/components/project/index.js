import React from 'react';
import {Link} from 'gatsby';
import TileBackground from "../tile-background"
import ProjectTile from "../project-tile"
import './project.module.css';

// Todo: Implement react-router-scroll here to maintain location on main page
function Project({colSize, img, title, link}) {
  let col = 'col-md-' + colSize;
  const classes = col + ' project';

  return (
    <div className={classes}>
      <Link to={link} className='gatsby-link'>
        <TileBackground>
          <ProjectTile img={img} title={title}/>
        </TileBackground>
      </Link>
    </div>
  )
};

export default Project;