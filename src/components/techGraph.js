import React from 'react'
import { Hidden } from "@material-ui/core"
import { SectionContainer, SwooshContainer } from "./containers"
import theme from '../styles/theme'
import ContentGrid from './layouts/contentGrid'
import loadable from '@loadable/component'
import techData from '../utils/techData'

const ForceGraph = loadable(() => import('./forceGraph'))

function TechGraph() {
  return (
    <SectionContainer background={theme.palette.backgrounds.main}>
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
            backgroundColor='transparent'
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

      <SwooshContainer>
        <svg width="1440" height="108" viewBox="0 0 1440 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="4600" transform="translate(0 -2847)" fill={theme.palette.backgrounds.main}/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 108L60 90C120 72 240 36 360 30C480 24 600 48 720 66C840 84 960 96 1080 84C1200 72 1320 36 1380 18L1440 0V324H1380C1320 324 1200 324 1080 324C960 324 840 324 720 324C600 324 480 324 360 324C240 324 120 324 60 324H0V108Z"
                fill={theme.palette.accents.purple}/>
        </svg>
      </SwooshContainer>
    </SectionContainer>
  )
}

export default TechGraph