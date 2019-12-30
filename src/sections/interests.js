import React from 'react';
import LayoutParallax from "../components/layouts/layout-parallax"
import SectionTitle from "../components/section-title"

function Interests() {
  return (
    <LayoutParallax bgImage={require('../images/backgrounds/happy_place.png')}>
      <SectionTitle title="When I'm not working I enjoy" style={{color: 'white'}}/>
    </LayoutParallax>
  )
}

export default Interests;