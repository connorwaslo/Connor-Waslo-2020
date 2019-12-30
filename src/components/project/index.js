import React, {useState} from 'react';
import {Link} from 'gatsby';
import TileBackground from "../tile-background"
import ProjectTile from "../project-tile"
import './project.module.css';

// Todo: Implement react-router-scroll here to maintain location on main page
function Project({children, colSize, img, title, link}) {
  const [open, setOpen] = useState(false);

  let col = 'col-md-' + colSize;
  const classes = col + ' project';

  // Todo: when clicked on, slide down a summary with a "read more" button
  return (
    <div className={classes}>
      {/*<Link to={link} className='gatsby-link'>*/}
      <div onClick={() => setOpen(!open)}>
        <TileBackground>
          <ProjectTile img={img} title={title}/>
        </TileBackground>
      </div>
      {
        open ? (
          <div className='mt-5'>
            <div style={{textAlign: 'left'}}>
            {children}
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='btn btn-primary mt-3'>
                  <Link to={link} className='gatsby-link' style={{color: 'white'}}>
                    Read more
                  </Link>
                </div>
              </div>
              <div className='col-6'>
                <div className='btn btn-danger mt-3' onClick={() => setOpen(false)}>
                  Close
                </div>
              </div>
            </div>
          </div>
        ) : (
          null
        )
      }
    </div>
  )
};

export default Project;