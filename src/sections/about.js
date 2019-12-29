import React from 'react';
import FullHeight from '../components/fullheight';
import LayoutTextCenter from '../components/layouts/layout-text-center';
import SectionTitle from '../components/section-title';
import './about.module.css';
import CornerIcon from "../components/corner-icon"

export default ({bgColor}) => (
  <FullHeight bgColor={bgColor}>
    <LayoutTextCenter>
      <SectionTitle title='Who am I?'/>
      <br/>
      <h1 className='about-text display-4 my-4'>
        CS Student @ Vanderbilt
        <img src={require('../images/inline/anchordown.png')} alt='anchordown'
             style={{width: '1.5em', marginBottom: 0}}/>
      </h1>
      <h1 className='about-text display-4 my-5'>Entrepreneur</h1>
      <h1 className='about-text display-4 my-5'>Aspiring marathoner</h1>
      <h1 className='about-text display-4 my-5'>People person</h1>
      <h1 className='about-text display-4 my-5'>CA born, AZ raised</h1>
    </LayoutTextCenter>
    <CornerIcon src={require('../images/corner-icons/cactus.png')} alt='cactus'/>
  </FullHeight>
)