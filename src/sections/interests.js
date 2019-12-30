import React from 'react';
import LayoutParallax from "../components/layouts/layout-parallax"
import SectionTitle from "../components/section-title"

function Interests() {
  return (
    <LayoutParallax bgImage={require('../images/backgrounds/happy_place.png')}>
      <SectionTitle title="When I'm not working I enjoy" style={{color: 'white'}}/>
      <h1 className="text-center text-white my-5">Running 🏃 (it's a love/hate thing)</h1>
      <h1 className="text-center text-white my-5">Drinking Coffee ☕</h1>
      <h1 className="text-center text-white my-5">Storytelling 🗣️</h1>
      <h1 className="text-center text-white my-5">Beach Volleyball 🏐</h1>
      <h1 className="text-center text-white my-5">Spicy Food 🔥</h1>
    </LayoutParallax>
  )
}

export default Interests;