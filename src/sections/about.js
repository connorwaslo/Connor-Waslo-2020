import React from 'react';
import FullHeight from '../components/fullheight';
import LayoutTextCenter from '../components/layout-text-center';
import SectionTitle from '../components/section-title';
import './about.module.css';
import CornerIcon from "../components/corner-icon"

export default ({bgColor}) => (
  <FullHeight bgColor={bgColor}>
    <LayoutTextCenter>
      <SectionTitle title='Who am I?'/>
      <h4 className='about-text display-4'>CS Student @ Vanderbilt</h4>
      <h1 className='about-text display-4'>Entrepreneur</h1>
      <h1 className='about-text display-4'>Aspiring marathoner</h1>
      <h1 className='about-text display-4'>People person</h1>
      <h1 className='about-text display-4'>CA born, AZ raised</h1>
    </LayoutTextCenter>
    <CornerIcon/>
  </FullHeight>
)