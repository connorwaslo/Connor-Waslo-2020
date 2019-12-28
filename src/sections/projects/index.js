import React from 'react';
import FullHeight from "../../components/fullheight"
import LayoutTextCenter from "../../components/layout-text-center"
import SectionTitle from "../../components/section-title"

function Projects({bgColor}) {
  return (
    <FullHeight bgColor={bgColor}>
      <LayoutTextCenter>
        <SectionTitle title="What I'm Working On"/>
      </LayoutTextCenter>
    </FullHeight>
  )
}

export default Projects;