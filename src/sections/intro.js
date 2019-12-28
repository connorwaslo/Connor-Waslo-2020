import React from 'react';
import FullHeight from '../components/fullheight';
import LayoutTextCenter from '../components/layout-text-center';
import CornerIcon from '../components/corner-icon';

export default () => (
  <FullHeight>
    <LayoutTextCenter>
      <h1 className='display-1'>Hi, I'm Connor Waslo</h1>
      <h1 className='display-3'>Here's what I'm about</h1>
    </LayoutTextCenter>
    <CornerIcon src={require('../images/corner-icons/rocket.png')} alt='rocket'/>
  </FullHeight>
);