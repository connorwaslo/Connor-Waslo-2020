import React from 'react';
import FullHeight from '../components/fullheight';
import LayoutTextCenter from '../components/layouts/layout-text-center';
import CornerIcon from '../components/corner-icon';

export default ({bgColor}) => (
  <FullHeight bgColor={bgColor}>
    <LayoutTextCenter>
      <h1 className='display-1'>Hi, I'm Connor Waslo</h1>
      <h1 className='my-2 py-3'>.</h1>
      <h1 className='my-2 py-3'>.</h1>
      <h1 className='my-2 py-3'>.</h1>
      <h1 className='my-2 py-3'>.</h1>
      <h1 className='display-3'>Here's what I'm about</h1>
    </LayoutTextCenter>
    <CornerIcon src={require('../images/corner-icons/rocket.png')} alt='rocket'/>
  </FullHeight>
);