import React from 'react'
import { Hidden } from "@material-ui/core"
import { SectionContainer } from './containers'
import theme from '../styles/theme'
import ContentGrid from './layouts/contentGrid'
import loadable from '@loadable/component'
import techData from '../utils/techData'

const ForceGraph = loadable(() => import('./forceGraph'))

function TechGraph() {
  return (
    <SectionContainer swoosh swooshColor={theme.palette.accents.purple} background={theme.palette.backgrounds.main}>
      <ContentGrid title='Technology'>
        <Hidden smUp>
          <ForceGraph
            graphData={techData}
            pauseAnimation
            width={300}
            height={360}
            backgroundColor={theme.palette.backgrounds.main}
            nodeAutoColorBy='group'
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.id;
              const fontSize = 12/globalScale;
              ctx.font = `${fontSize}px Poppins`;
              const textWidth = ctx.measureText(label).width;
              const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

              ctx.fillStyle = theme.palette.backgrounds.main;
              ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = theme.palette.accents.purple;
              ctx.fillText(label, node.x, node.y);
            }}/>
        </Hidden>
        <Hidden xsDown>
          <ForceGraph
            graphData={techData}
            pauseAnimation
            width={480}
            height={360}
            backgroundColor={theme.palette.backgrounds.main}
            nodeAutoColorBy='group'
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.id;
              const fontSize = 12/globalScale;
              ctx.font = `${fontSize}px Poppins`;
              const textWidth = ctx.measureText(label).width;
              const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

              ctx.fillStyle = theme.palette.backgrounds.main;
              ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = theme.palette.accents.purple;
              ctx.fillText(label, node.x, node.y);
            }}/>
        </Hidden>
      </ContentGrid>
    </SectionContainer>
  )
}

export default TechGraph