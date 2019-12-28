import React from 'react';
import FullHeight from '../components/fullheight';
import LayoutTextCenter from '../components/layout-text-center';
import SectionTitle from '../components/section-title';

export default ({bgColor}) => (
  <FullHeight bgColor={bgColor}>
    <LayoutTextCenter>
      <SectionTitle title='Who am I?'/>
    </LayoutTextCenter>
  </FullHeight>
)